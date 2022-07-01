import { ICreateComponentDTO } from "../dtos/ICreateComponentDTO";

interface IComponentsRepository {
    create(data: ICreateComponentDTO): void;
}

export { IComponentsRepository }