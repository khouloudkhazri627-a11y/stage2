const express = require('express');
const router = express.Router();

const { createUtilisateur, getAllUtilisateurs, getUtilisateurById,deleteUtilisateur , 
updateUtilisateur
} = require('../controllers/UtilisateursControllers');

// Route pour créer un utilisateur
router.post('/', createUtilisateur);

router.get('/', getAllUtilisateurs);

router.get('/:id', getUtilisateurById);
router.delete('/:id',deleteUtilisateur);
router.put('/:id', updateUtilisateur);



module.exports = router;