const express = require('express');
const router = express.Router();

const { createAdmin} = require('../controllers/AdminController');

// Route pour créer un admin
router.post('/', createAdmin);

module.exports = router;