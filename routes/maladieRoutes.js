const express = require('express');
const router = express.Router();
const auth=require('../middlewares/authMiddleware');
const role=require('../middlewares/roleMiddleware');
const { createMaladie,updateMaladie,getAllMaladie} =require("../controllers/ControllerMaladie");


router.post('/', auth,role("medecin"),createMaladie);

router.put('/:id',auth,role("medecin"), updateMaladie);
router.get('/', auth,role("admin"),getAllMaladie);
module.exports = router;