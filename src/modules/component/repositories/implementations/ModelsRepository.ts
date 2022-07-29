import { ICreateModelDTO } from "../../dtos/ICreateModelDTO";
import { Component } from "../../entities/Component";
import { Model } from "../../entities/Model";
import { IComponentsRepository } from "../IComponentsRepository";
import { IModelsRepository } from "../IModelsRepository";
import { ComponentsRepository } from "./ComponentsRepository";

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

    create({name, qtyUser, components}: ICreateModelDTO): Model {
        const model = new Model();
        const componentsList: Component[] = [];

        components.forEach(component => {
            const componentsRepository: IComponentsRepository = ComponentsRepository.getInstance();
            const componentObj: Component = componentsRepository.create(component);
            componentObj.id_model = model.id;
            componentsList.push(componentObj);
        });

        console.log(qtyUser)
        Object.assign(model, {
            name,
            qtyUser,
            components: componentsList,
        });

        this.models.push(model);

        return model;
    }

}

export { ModelsRepository };