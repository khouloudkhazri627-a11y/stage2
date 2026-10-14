const express = require('express');
const router = express.Router();
const auth=require('../middlewares/authMiddleware');
const role=require('../middlewares/roleMiddleware');
const { createSymptome,updateSymptome,getAllSymptome,getSymptomesByIdPatient} = require('../controllers/SymptomeController');

// Route pour créer un symptome
router.post('/', auth, role("medecin"), createSymptome);

router.put('/:id', auth, role("medecin"), updateSymptome);

router.get('/', getAllSymptome);

router.get('/patient/:id', auth, role("medecin"), getSymptomesByIdPatient);

module.exports = router;

