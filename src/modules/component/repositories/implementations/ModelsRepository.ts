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
    
    findByName(name: string): Model {
        const model = this.models.find(model => model.name === name);
        return model;
    }

    findById(id: string): Model {
        const model = this.models.find(model => model.id === id)
        return model;
    }

    list(): Model[] {
        return this.models;
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