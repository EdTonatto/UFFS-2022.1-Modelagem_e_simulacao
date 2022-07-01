import { Request, Response } from "express";
import { CreateComponentUseCase } from "./CreateComponentUseCase";

class CreateComponentController {
    constructor(private createComponentUseCase: CreateComponentUseCase) {}

    handle(request: Request, response: Response): Response {
      const {
        name,
        qtyServer,
        randomTimeServer,
        flagBusy,
        timeInOut,
        next,
      } = request.body;

      const component = this.createComponentUseCase.execute({
        name,
        qtyServer,
        randomTimeServer,
        flagBusy,
        timeInOut,
        next,  
      });

      return response.status(201).json(component);
    }
}

export { CreateComponentController }