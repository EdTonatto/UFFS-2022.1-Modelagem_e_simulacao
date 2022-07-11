import { ModelsRepository } from "../../repositories/implementations/ModelsRepository";
import { ListModelsController } from "./ListModelsController";
import { ListModelsUseCase } from "./ListModelsUseCase";

const modelsRepository = ModelsRepository.getInstance();

const listModelsUseCase = new ListModelsUseCase(modelsRepository);

const listModelsController = new ListModelsController(listModelsUseCase);

export { listModelsController }