import { ModelsRepository } from "../../repositories/implementations/ModelsRepository";
import { ComputeModelController } from "./ComputeModelController";
import { ComputeModelUseCase } from "./ComputeModelUseCase";

const modelsRepository = ModelsRepository.getInstance();

const computeModelUseCase = new ComputeModelUseCase(modelsRepository);

const computeModelController = new ComputeModelController(computeModelUseCase);

export { computeModelController }