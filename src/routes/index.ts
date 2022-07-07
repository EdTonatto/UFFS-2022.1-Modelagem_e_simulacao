import { Router } from "express";
import { componentsRoutes } from "./components.routes";
import { modelsRoutes } from "./models.routes";

const router = Router();

router.use('/components', componentsRoutes);
router.use('/models', modelsRoutes);

export { router };