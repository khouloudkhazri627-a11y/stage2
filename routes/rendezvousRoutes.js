const express = require('express');

const router = express.Router();

const {
    creerRendezVous,
    getAllRendezVous,
    getRendezVousById,
    modifierRendezVous,
    supprimerRendezVous
} = require('../controllers/RendezvousController');

router.post('/', creerRendezVous);

router.get('/', getAllRendezVous);

router.get('/:id', getRendezVousById);

router.put('/:id', modifierRendezVous);

router.delete('/:id', supprimerRendezVous);

module.exports = router;