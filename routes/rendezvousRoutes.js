const express = require('express');
const auth=require('../middlewares/authMiddleware');
const role=require('../middlewares/roleMiddleware');
const router = express.Router();

const {
    creerRendezVous,
    getAllRendezVous,
    getRendezVousById,
    modifierRendezVous,
    supprimerRendezVous,
    getRendezVousByIdMedecin,
    getRendezVousByIdPatient
} = require('../controllers/RendezvousController');

router.post('/', auth, role("medecin"), creerRendezVous);

router.get('/',auth,role("admin"), getAllRendezVous);

router.get('/:id', auth,role("medecin"), getRendezVousById);


router.get('/:id', auth,role("medecin"), getRendezVousById);
router.put('/:id', auth,role("medecin"), modifierRendezVous);
router.get('/medecin/:id', auth,role("medecin"), getRendezVousByIdMedecin);

router.delete('/:id', auth,role("medecin"), supprimerRendezVous);
router.get('/patient/:id', auth,role("patient"), getRendezVousByIdPatient);

module.exports = router;