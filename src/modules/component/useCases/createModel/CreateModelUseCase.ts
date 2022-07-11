import { AppError } from "../../../../errors/AppError";
import { ICreateModelDTO } from "../../dtos/ICreateModelDTO";
import { Model } from "../../entities/Model";
import { IModelsRepository } from "../../repositories/IModelsRepository";

class CreateModelUseCase {
    constructor(private modelsRepository: IModelsRepository) {}

    execute({
        name,
        components
    }: ICreateModelDTO): Model {
        const modelAlreadyExists = this.modelsRepository.findByName(name);
        if(modelAlreadyExists){
            throw new AppError('Model already exists!');
        }

        const model = this.modelsRepository.create({
            name,
            components
        });

        return model;
    }
}

export { CreateModelUseCase }