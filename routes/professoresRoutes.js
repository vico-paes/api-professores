const express = require("express");
const controller = require("../controllers/professoresController");

const router = express.Router();

router.get("/", controller.listarProfessores);
router.get("/departamento/:departamento", controller.listarPorDepartamento);
router.get("/:id", controller.buscarPorId);
router.get("/:id/turmas", controller.listarTurmas);
router.put("/:id", controller.atualizarProfessor);
router.post("/:id/turmas", controller.adicionarTurma);
router.delete("/:id", controller.removerProfessor);

module.exports = router;
