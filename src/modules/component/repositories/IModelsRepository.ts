import { ICreateModelDTO } from "../dtos/ICreateModelDTO";
import { Model } from "../entities/Model";

interface IModelsRepository {
    findByName(name: string): Model;
    list(): Model[];
    create(data: ICreateModelDTO): Model;
}

export { IModelsRepository };