const Router = require('express')
const router = new Router()
const controller = require('../controllers/auth-controller')

// Middleware validation method
const { check } = require("express-validator")




// Register
router.post('/register', [
    // Candidat input data validation 
    check('email', "Email користувача не може бути пустим").notEmpty(),
    check('password', "Пароль повинен бути більше 4 і менше 10 символів").isLength({ min: 4, max: 10 })
], controller.registration)

// Login
router.post('/login', controller.login)


module.exports = router
