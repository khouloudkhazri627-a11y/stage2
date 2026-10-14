const express = require('express');
const router = express.Router();
const auth=require('../middlewares/authMiddleware');
const role=require('../middlewares/roleMiddleware');
const { createRecommandation, getAllRecommandations, getRecommandationById,deleteRecommandation , 
updateRecommandation,getRecomandationByIdmedecin
} = require('../controllers/RecommandationController');


router.post('/', auth,role("medecin"),createRecommandation);

router.get('/', auth,role("admin"),getAllRecommandations);

router.get('/:id',auth,role("medecin"), getRecommandationById);
router.delete('/:id',auth,role("medecin"),deleteRecommandation );
router.put('/:id',auth,role("medecin"), updateRecommandation );
router.get('/medecin/:idMedecin',auth,role("medecin"), getRecomandationByIdmedecin);


module.exports = router;