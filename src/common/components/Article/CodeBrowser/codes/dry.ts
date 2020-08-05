export const drymain = `
// genericCrudService.ts
export interface IGenericServiceOrchestrator<REPO, CREATE_DTO, UPDATE_DTO> {
  findOneOrchestration: (id: number) => Promise<REPO[]>;
  postOrchestration: (dto: CREATE_DTO) => Promise<object>;
  putOrchestration: (id: number, dto: UPDATE_DTO) => Promise<object>;
  deleteOrchestration: (id: number) => Promise<string>;
}

export type TSOFactory = <REPO, CREATE_DTO, UPDATE_DTO>(
  repository: Type<REPO>,
) => Type<IGenericServiceOrchestrator<REPO, CREATE_DTO, UPDATE_DTO>>;

export const GenericServiceOrchestratorFactory: TSOFactory = repository => {
  class GenericServiceOrchestrator<REPO, CREATE_DTO, UPDATE_DTO> {
    @InjectRepository(repository) private repository: Repository<REPO>;

    @Inject() private createService: GenericCreate<REPO, CREATE_DTO>;
    @Inject() private updateService: GenericUpdate<REPO, UPDATE_DTO>;
    @Inject() private deleteService: GenericDelete<REPO>;
    @Inject() private searchService: GenericSearch<REPO>;

    findOneOrchestration(id: number): Promise<REPO[]> {
      return this.searchService.find(this.repository, id);
    }

    async postOrchestration(createDto): Promise<object> {
      return this.createService.create(this.repository, createDto);
    }

    async putOrchestration(id, updateDto): Promise<object> {
      return this.updateService.update(this.repository, id, updateDto);
    }

    async deleteOrchestration(id): Promise<string> {
      return this.deleteService.delete(this.repository, id);
    }
  }

  return GenericServiceOrchestrator;
};

`;
