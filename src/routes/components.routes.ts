import { Router } from "express";
import { createComponentController } from "../modules/component/useCases/createComponent";
import { listComponentsController } from "../modules/component/useCases/listComponents";

const componentsRoutes = Router();

componentsRoutes.post('/', (request, response) => {
    return createComponentController.handle(request, response);
});

componentsRoutes.get('/', (request, response) => {
    return listComponentsController.handle(request, response);
});

export { componentsRoutes };