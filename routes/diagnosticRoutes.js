const express = require('express');
const router = express.Router();
const auth=require('../middlewares/authMiddleware');
const role=require('../middlewares/roleMiddleware');
const { createDiagnostic, updateDiagnostic,getAllDiagnostic}= require("../controllers/DiagnosticController");


router.post('/',auth,role("medecin"), createDiagnostic);
router.put('/:id',auth,role("medecin"), updateDiagnostic );

router.get('/', auth,role("admin"),getAllDiagnostic);

module.exports = router;