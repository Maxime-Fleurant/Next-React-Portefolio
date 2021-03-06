export const main = `
useContainer(Container);
dotEnv.config();

@Service()
export class App {
  constructor(
    private schema: SchemaMaker,
    private loaders: Loaders,
    private jwt: Jwt
  ) {}

  async start() {
    const app = express();
    const schema = await this.schema.create();
    const loaders = await this.loaders.createLoaders();

    const apolloServer = new ApolloServer({
      schema,
      plugins: [
        {
          requestDidStart: () => ({
            didResolveOperation({ request, document }) {
              const complexity = getComplexity({
                schema,
                operationName: request.operationName,
                query: document,
                variables: request.variables,
                estimators: [
                  fieldExtensionsEstimator(),
                  simpleEstimator({ defaultComplexity: 1 }),
                ],
              });

              if (complexity > 100) {
                throw new Error(
                  \`Sorry, too complicated query! \${complexity} is
                   over 20 that is the max allowed complexity.\`
                );
              }
            },
          }),
        },
      ],
      context: ({ req }) => {
        let user: Pick<User, 'id' | 'role'> | null;

        if (req.headers.authorization) {
          const token = req.headers.authorization.split(' ')[1];

          user = this.jwt.jwt.verify(
            token,
            process.env.JWT_SECRET as string
          ) as Pick<User, 'id' | 'role'>;
        } else {
          user = null;
        }

        const context: IContext = {
          user: user ? { id: user.id, role: user.role } : null,
          loaders,
        };

        return context;
      },
      debug: false,
    });

    apolloServer.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
      console.log(\`🚀 Server ready at http://localhost:4000\`)
    );
  }
}

const start = async () => {
  await createConnection();

  const app = Container.get(App);

  app.start();
};

start();


`;
