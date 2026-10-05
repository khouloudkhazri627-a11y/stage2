const express = require('express');
const router = express.Router();

const { createMedecin,updateMedecin,getAllMedecin} = require('../controllers/MedecinController');

// Route pour créer un medecin
router.post('/', createMedecin);

router.put('/:id', updateMedecin);

router.get('/', getAllMedecin);

module.exports = router;