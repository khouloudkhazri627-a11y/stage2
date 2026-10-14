const express = require('express');
const router = express.Router();
const auth=require('../middlewares/authMiddleware');
const role=require('../middlewares/roleMiddleware');
const { createMedecin,updateMedecin,getAllMedecin} = require('../controllers/MedecinController');

// Route pour créer un medecin
router.post('/', auth,role("admin"), createMedecin);

router.put('/:id',  auth,role("admin","medecin"), updateMedecin);

router.get('/', auth,role("admin"),getAllMedecin);

module.exports = router;