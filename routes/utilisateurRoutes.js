const express = require('express');
const router = express.Router();
const auth=require('../middlewares/authMiddleware');
const role=require('../middlewares/roleMiddleware');
const { createUtilisateur, getAllUtilisateurs, getUtilisateurById,deleteUtilisateur , 
updateUtilisateur
} = require('../controllers/UtilisateursControllers');

// Route pour créer un utilisateur
router.post('/', createUtilisateur);

router.get('/',auth,role("admin"), getAllUtilisateurs);

router.get('/:id', auth, role("admin"), getUtilisateurById);
router.delete('/:id', auth, role("admin"), deleteUtilisateur);
router.put('/:id', auth, role("admin"), updateUtilisateur);



module.exports = router;