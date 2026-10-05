const express = require('express');
const router = express.Router();

const { createDiagnostic, updateDiagnostic,getAllDiagnostic}= require("../controllers/DiagnosticController");


router.post('/', createDiagnostic);
router.put('/:id',updateDiagnostic );

router.get('/', getAllDiagnostic);

module.exports = router;