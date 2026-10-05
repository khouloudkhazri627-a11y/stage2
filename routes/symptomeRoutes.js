const express = require('express');
const router = express.Router();

const { createSymptome,updateSymptome,getAllSymptome} = require('../controllers/SymptomeController');

// Route pour créer un symptome
router.post('/', createSymptome);

router.put('/:id', updateSymptome);

router.get('/', getAllSymptome);

module.exports = router;

