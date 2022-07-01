import { ComponentsRepository } from "../../repositories/implementations/ComponentsRepository";
import { ListComponentsController } from "./ListComponentsController";
import { ListComponentsUseCase } from "./ListComponentsUseCase";

const componentsRepository = ComponentsRepository.getInstance();

const listComponentsUseCase = new ListComponentsUseCase(componentsRepository);

const listComponentsController = new ListComponentsController(listComponentsUseCase);

export { listComponentsController };