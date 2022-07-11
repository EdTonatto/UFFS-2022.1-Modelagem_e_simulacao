import { Model } from "../../entities/Model";
import { IModelsRepository } from "../../repositories/IModelsRepository";

class ListModelsUseCase {
    constructor(private modelsRepository: IModelsRepository) {}

    execute(): Model[] {
        const models = this.modelsRepository.list();
        return models;
    }
}

export { ListModelsUseCase }