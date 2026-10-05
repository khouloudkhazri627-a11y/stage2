const express = require('express');
const router = express.Router();

const { createMaladie,updateMaladie,getAllMaladie} =require("../controllers/ControllerMaladie");


router.post('/', createMaladie);
router.put('/ id', updateMaladie);
router.get('/', createMaladie);
module.exports = router;