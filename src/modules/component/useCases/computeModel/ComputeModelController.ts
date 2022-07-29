import { Request, Response } from "express";
import { ComputeModelUseCase } from "./ComputeModelUseCase";

class ComputeModelController {
    constructor(private computeModelUseCase: ComputeModelUseCase) {}

    handle(request: Request, response: Response): Response {
        const { id }  = request.params;

        this.computeModelUseCase.execute(id);

        return response.status(200);
    }
}

export { ComputeModelController }