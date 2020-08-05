import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import { Cell } from '../../common/components/Cell/cell';
import ArticleHead from '../../common/components/Article/ArticleHead/ArticleHead';
import {
  mainText,
  insideLink,
} from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import NpmIcon from '../../common/components/icons/Npm';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import TypescriptIcon from '../../common/components/icons/Typescript';
import PostgresIcon from '../../common/components/icons/Postgres';
import MongoDbIcon from '../../common/components/icons/Mongodb';
import JWTIcon from '../../common/components/icons/JWT';
import CodeBrowser from '../../common/components/Article/CodeBrowser/CodeBrowser';
import {
  expressMain,
  expressJwt,
  expressModel,
} from '../../common/components/Article/CodeBrowser/codes/express';
import Article from '../../common/components/Article/Article';

const Express = () => {
  return (
    <>
      {/* <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [{ name: 'Dataloader', href: '#test' }],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Github',
                href: 'https://github.com/expressjs/express',
                outside: true,
              },
              {
                name: 'Official Website',
                href: 'https://expressjs.com/',
                outside: true,
              },
              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/express',
                outside: true,
              },
              {
                name: 'Wikipedia',
                href: 'https://en.wikipedia.org/wiki/Express.js',
                outside: true,
              },
            ],
          },
          {
            name: 'Related',
            items: [
              { name: 'Node', href: '/compute/node', domain: true },
              { name: 'JWT', href: '/compute/jwt', domain: true },
              { name: 'Knex', href: '/compute/knex', domain: true },
            ],
          },
        ]}
      /> */}

      <Article
        articleHeader={{
          titleContent: 'Express',
          logo: <span className="icon-expressjs-icon" />,
          desc: 'Fast, unopinionated, minimalist web framework for Node.js',
          npm: 'https://www.npmjs.com/package/express',
          official: 'https://expressjs.com/',
          git: 'https://github.com/expressjs/express',
          wiki: 'https://en.wikipedia.org/wiki/Express.js',
          detail: 'Api | Rest',
        }}
        headerContent={
          <span>
            Express is a minimal and flexible Node.js web application framework
            that provides a robust set of features for
            <a css={insideLink}>{` web `} 🖥 </a>
            and <a css={insideLink}>{` mobile `} 📱</a> applications. With a
            myriad of HTTP utility methods and middleware at your disposal,
            creating a robust API is quick and easy. Express provides a thin
            layer of fundamental web application features, without obscuring
            <a css={insideLink}>
              {` Node.js `} <span className="icon-nodejs-icon" />{' '}
            </a>
            features.
            <br />
            <br />I use the
            <a css={insideLink}>
              {` Express `} <span className="icon-expressjs-icon" />{' '}
            </a>
            js framework to quickly develop REST APIs in conjunction with a
            variety of different tools depending on the database used.
            <a css={insideLink}>
              {` Knex `} <span className="icon-knex" />{' '}
            </a>
            / Objection for
            <a css={insideLink}>
              {` PostgresQL `} <PostgresIcon />
            </a>
            , Mongoose for
            <a css={insideLink}>
              {` Mongodb `} <MongoDbIcon />
            </a>
            . Input validation is handled by
            <a css={insideLink}>
              {` Celebrate / Joi `} <NpmIcon />
            </a>
            , Auth using
            <a css={insideLink}>
              {` JWT `} <JWTIcon />{' '}
            </a>
            tokens and config using <a css={insideLink}>{` .Env`}</a>
            . The structure of my Express projects follows the 3 layer pattern
            to achieve separation of concerns by moving the business logic away
            from the node.js API Routes.
            <br />
            <br />
            You can find examples of my code using express in the{' '}
            <a css={insideLink}>
              {` Github anime api
          rest postgres `}{' '}
              <span className="icon-github-filled" />{' '}
            </a>
            repository.
          </span>
        }
        headerCode={{ code: expressMain, language: 'language-js' }}
        content={[]}
      />
    </>
  );
};

export default Express;
