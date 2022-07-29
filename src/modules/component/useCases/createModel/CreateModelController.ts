import { Request, Response } from "express";
import { CreateModelUseCase } from "./CreateModelUseCase";

class CreateModelController {
    constructor(private createModelUserCase: CreateModelUseCase) {}

    handle(request: Request, response: Response): Response {
        const {
            name,
            qtyUser,
            components
        } = request.body;

        const model = this.createModelUserCase.execute({
            name,
            qtyUser,
            components
        });

        return response.status(201).json(model);
    }
}

export { CreateModelController }