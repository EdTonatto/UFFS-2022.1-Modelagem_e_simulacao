import { ComponentsRepository } from "../../repositories/implementations/ComponentsRepository";
import { CreateComponentController } from "./CreateComponentController";
import { CreateComponentUseCase } from "./CreateComponentUseCase";

const componentsRepository = ComponentsRepository.getInstance();

const createComponentUseCase = new CreateComponentUseCase(componentsRepository);

const createComponentController = new CreateComponentController(createComponentUseCase);

export { createComponentController };