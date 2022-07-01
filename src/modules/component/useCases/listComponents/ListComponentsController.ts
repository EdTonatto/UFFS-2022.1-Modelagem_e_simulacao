import { Request, Response } from "express";
import { ListComponentsUseCase } from "./ListComponentsUseCase";

class ListComponentsController {
    constructor(private listComponentsUseCase: ListComponentsUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listComponentsUseCase.execute();

        return response.status(200).json(all);
    }
}

export { ListComponentsController }