import { Router } from "express";
import { depoMethod } from "../controllers/deporte.controller.js";

const router = Router();

router.get("/deportes", depoMethod.getDepo);

router.post("/agregar", depoMethod.postDepo);

router.delete("/eliminar/:id", depoMethod.deleteDepo);

router.put("/editar/:id", depoMethod.updateDepo);

export default router;
