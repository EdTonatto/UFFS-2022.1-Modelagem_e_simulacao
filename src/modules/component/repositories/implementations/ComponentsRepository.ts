import { ICreateComponentDTO } from "../../dtos/ICreateComponentDTO";
import { Component } from "../../entities/Component";
import { IComponentsRepository } from "../IComponentsRepository";

class ComponentsRepository implements IComponentsRepository{
    private components: Component[];
    
    private static INSTANCE: ComponentsRepository;

    private constructor() {
        this.components = []
    }

    list(): Component[] {
        return this.components;
    }

    public static getInstance() {
        if(!ComponentsRepository.INSTANCE){
            ComponentsRepository.INSTANCE = new ComponentsRepository();
        }
        return ComponentsRepository.INSTANCE;
    }

    create({    
        name,
        qtyServer,
        randomTimeServer,
        flagBusy,
        timeInOut,
        next,
    }: ICreateComponentDTO): Component {
        const component = new Component();

        Object.assign(component, {
            name,
            qtyServer,
            randomTimeServer,
            flagBusy,
            timeInOut,
            next
        });

        this.components.push(component);

        return component;
    }

}

export { ComponentsRepository };