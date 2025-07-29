const express = require('express');
const router = express.Router();
const { handleBfhlPost } = require('../controllers/bfhlController');

router.post('/', handleBfhlPost);

module.exports = router;
