import { ICreateComponentDTO } from "../dtos/ICreateComponentDTO";
import { Component } from "../entities/Component";

interface IComponentsRepository {
    create(data: ICreateComponentDTO): Component;
}

export { IComponentsRepository }