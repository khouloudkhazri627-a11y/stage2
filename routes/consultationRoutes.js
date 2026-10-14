const express = require('express');
const router = express.Router();
const auth=require('../middlewares/authMiddleware');
const role=require('../middlewares/roleMiddleware');
const { createConsultation, getAllConsultation, deleteConsultation , 
updateConsultation,getAllConsultationByIdMedecin,getPatientsByMedecin
} = require('../controllers/ConsultationController');


router.post('/',auth,role("medecin"), createConsultation );
router.get('/',auth,role("admin"), getAllConsultation);
router.delete('/:id',auth,role("medecin"),deleteConsultation );
router.put('/:id',auth,role("medecin"), updateConsultation );
router.get('/medecin/:id', auth,role("medecin"), getAllConsultationByIdMedecin );
router.get("/medecin/:idMedecin/patients", auth, role("medecin"), getPatientsByMedecin);


module.exports = router;