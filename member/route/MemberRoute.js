const express = require('express');
const memberController = require('../controller/MemberController');

const router = express.Router();

router.post('/join', memberController.join);
router.post('/login', memberController.login);

module.exports = router;