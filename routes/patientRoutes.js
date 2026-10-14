const express = require('express');
const router = express.Router();
const auth=require('../middlewares/authMiddleware');
const role=require('../middlewares/roleMiddleware');
const { createPatient,getAllPatient,} = require('../controllers/PatientController');

// Route pour créer un patient
router.post('/', auth,role("medecin"),createPatient);

// Route pour récupérer tous les patients
router.get('/', auth,role("admin"),getAllPatient);

module.exports = router;