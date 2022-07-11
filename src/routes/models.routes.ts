import { response, Router } from "express";
import { createModelController } from "../modules/component/useCases/createModel";
import { listModelsController } from "../modules/component/useCases/listModels";

const modelsRoutes = Router();

modelsRoutes.post('/', (request, response) => {
    return createModelController.handle(request, response);
});

modelsRoutes.get('/', (request, response) => {
    return listModelsController.handle(request, response);
});

export { modelsRoutes };