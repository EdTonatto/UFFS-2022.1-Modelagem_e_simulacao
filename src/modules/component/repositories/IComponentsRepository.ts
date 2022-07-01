import { ICreateComponentDTO } from "../dtos/ICreateComponentDTO";
import { Component } from "../entities/Component";

interface IComponentsRepository {
    findByName(name: string): Component;
    list(): Component[];
    create(data: ICreateComponentDTO): Component;
}

export { IComponentsRepository }