import { ICreateModelDTO } from "../dtos/ICreateModelDTO";
import { Model } from "../entities/Model";

interface IModelsRepository {
    create(data: ICreateModelDTO): Model;
}

export { IModelsRepository };