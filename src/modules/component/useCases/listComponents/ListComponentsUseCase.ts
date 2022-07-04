import { Component } from "../../entities/Component";
import { IComponentsRepository } from "../../repositories/IComponentsRepository";

class ListComponentsUseCase {
    constructor(private componentsRepository: IComponentsRepository) {}

    execute(): Component[] {
        const components = this.componentsRepository.list();
        return components;
    }
}

export { ListComponentsUseCase }