const express = require('express');
const router = express.Router();

const { createPatient} = require('../controllers/PatientController');

// Route pour créer un patient
router.post('/', createPatient);

module.exports = router;