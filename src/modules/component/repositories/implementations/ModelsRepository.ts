import { ICreateModelDTO } from "../../dtos/ICreateModelDTO";
import { Model } from "../../entities/Model";
import { IModelsRepository } from "../IModelsRepository";

class ModelsRepository implements IModelsRepository{
    private models: Model[];

    private static INSTANCE: ModelsRepository;

    private constructor() {
        this.models = [];
    }
    
    public static getInstance() {
        if(!ModelsRepository.INSTANCE){
            ModelsRepository.INSTANCE = new ModelsRepository();
        }
        return ModelsRepository.INSTANCE;
    }

    create({name, components}: ICreateModelDTO): Model {
        const model = new Model();
        Object.assign(model, {
            name,
            components,
        });

        this.models.push(model);

        return model;
    }

}

export { ModelsRepository };