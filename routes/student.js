const { Router } = require("express");
const { createStudent, getAllStudents } = require("../controllers/students");
const { createMatKul, getAllMatkul } = require("../controllers/matakuliah");

const router = Router();

router.post("/students", createStudent);
router.get("/students", getAllStudents);
router.post("/matakuliah", createMatKul);
router.get("/matakuliah", getAllMatkul);

module.exports = router;