import { Request, Response } from "express";
import { ListModelsUseCase } from "./ListModelsUseCase";

class ListModelsController {
    constructor(private listModelsUseCase: ListModelsUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listModelsUseCase.execute();

        return response.status(200).json(all);
    }
}

export { ListModelsController }