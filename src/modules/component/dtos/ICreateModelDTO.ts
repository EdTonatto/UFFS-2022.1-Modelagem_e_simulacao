import { ICreateComponentDTO } from "./ICreateComponentDTO";

interface ICreateModelDTO {
    name: string;
    components: ICreateComponentDTO[];
}

export { ICreateModelDTO };