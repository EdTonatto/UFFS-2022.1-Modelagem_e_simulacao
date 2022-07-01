import { Router } from "express";
import { createComponentController } from "../modules/component/useCases/createComponent";

const componentsRoutes = Router();

componentsRoutes.post('/', (request, response) => {
    return createComponentController.handle(request, response);
})

export { componentsRoutes };