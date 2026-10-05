const express = require('express');
const router = express.Router();

const { createRecommandation, getAllRecommandation, getRecommandationById,deleteRecommandation , 
updateRecommandation
} = require('../controllers/RecommandationController');


router.post('/', createRecommandation);

router.get('/', getAllRecommandation);

router.get('/:id', getByIdRecommandation);
router.delete('/:id',deleteRecommandation );
router.put('/:id', updateRecommandation );



module.exports = router;