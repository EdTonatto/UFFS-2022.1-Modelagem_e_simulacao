import { Request, Response } from "express";
import { CreateModelUseCase } from "./CreateModelUseCase";

class CreateModelController {
    constructor(private createModelUserCase: CreateModelUseCase) {}

    handle(request: Request, response: Response): Response {
        const {
            name,
            components
        } = request.body;

        const model = this.createModelUserCase.execute({
            name,
            components
        });

        return response.status(201).json(model);
    }
}

export { CreateModelController }