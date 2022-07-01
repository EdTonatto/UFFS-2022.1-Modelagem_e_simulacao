import { Router } from "express";
import { componentsRoutes } from "./components.routes";

const router = Router();

router.use('/components', componentsRoutes);

export { router };