const express = require('express');
const router = express.Router();

const {register, login, processRegister, processLogin} = require('../controllers/usersController');
const {validateRegister, validateLogin} = require('../validations');

router
    .get('/register', register)
    .post('/register', validateRegister, processRegister)
    .get('/login', login)
    .post('/login', validateLogin, processLogin)
    

module.exports = router;