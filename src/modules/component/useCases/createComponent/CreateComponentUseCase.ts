import { AppError } from "../../../../errors/AppError";
import { ICreateComponentDTO } from "../../dtos/ICreateComponentDTO";
import { Component } from "../../entities/Component";
import { IComponentsRepository } from "../../repositories/IComponentsRepository";

class CreateComponentUseCase {
    constructor(private componentsRepository: IComponentsRepository) {}

    execute({
        name,
        qtyServer,
        randomTimeServer,
        flagBusy,
        timeInOut,
        next,
    }: ICreateComponentDTO): Component {
        const componentAlreadyExists = this.componentsRepository.findByName(name);

        if(componentAlreadyExists){
            throw new AppError('Component already exists!');
        }

        const component = this.componentsRepository.create({
            name,
            qtyServer,
            randomTimeServer,
            flagBusy,
            timeInOut,
            next,
        });

        return component;
    }
}

export { CreateComponentUseCase }