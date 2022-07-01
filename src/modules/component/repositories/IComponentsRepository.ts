import { ICreateComponentDTO } from "../dtos/ICreateComponentDTO";
import { Component } from "../entities/Component";

interface IComponentsRepository {
    list(): Component[];
    create(data: ICreateComponentDTO): Component;
}

export { IComponentsRepository }