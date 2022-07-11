import { ModelsRepository } from "../../repositories/implementations/ModelsRepository";
import { CreateModelController } from "./CreateModelController";
import { CreateModelUseCase } from "./CreateModelUseCase";

const modelsRepository = ModelsRepository.getInstance();

const createModelUseCase = new CreateModelUseCase(modelsRepository);

const createModelController = new CreateModelController(createModelUseCase);

export { createModelController }