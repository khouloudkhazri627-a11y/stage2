const express = require('express');
const router = express.Router();

const { createConsultation, getAllConsultation, deleteConsultation , 
updateConsultation
} = require('../controllers/ConsultationController');


router.post('/', createConsultation );
router.get('/', getAllConsultation);
router.delete('/:id',deleteConsultation );
router.put('/:id', updateConsultation );



module.exports = router;