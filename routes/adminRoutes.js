const express = require('express');
const router = express.Router();
const auth=require('../middlewares/authMiddleware');
const role=require('../middlewares/roleMiddleware');
const { createAdmin} = require('../controllers/AdminController');

// Route pour créer un admin
router.post('/',auth,role("admin"), createAdmin);

module.exports = router;