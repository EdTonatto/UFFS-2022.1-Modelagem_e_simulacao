import { ICreateComponentDTO } from "./ICreateComponentDTO";

interface ICreateModelDTO {
    name: string;
    qtyUser: number;
    components: ICreateComponentDTO[];
}

export { ICreateModelDTO };