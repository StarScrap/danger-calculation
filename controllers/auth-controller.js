const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/keys')

// JWT generation function
const generateAccessToken = (id) => {
    const payload = { id }
    return jwt.sign(payload, secret, { expiresIn: "24h" })
}

// Authorization controller 
class authController {

    async registration(req, res) {
        const candidate = await User.findOne({ email: req.body.email })
        if (candidate) {
            res.status(409).json({
                message: `Такий ${email} вже існує`
            })
        } else {
            const salt = bcrypt.genSaltSync(7)
            const password = req.body.password
            const user = new User({
                email: req.body.email,
                password: bcrypt.hashSync(password, salt)
            })
            try {
                await user.save()
                res.status(201).json(user)
            } catch (e) {
                console.log(e)
                res.status(400)
                    .json({ message: 'Register error' })
            }
        }
    }


    async login(req, res) {
        try {
            const { email, password } = req.body    // Get input User data
            const user = await User.findOne({ email })     // User name validation
            if (!user) {
                return res.status(400)
                    .json({ message: `Користувач ${email} не знайдений` })
            }
            if (email !== user.email) {     // Email validation
                return res.status(400)
                    .json({ message: `Введено невірний email` })
            }
            const validPassword = bcrypt.compareSync(password, user.password)     // Pasword validation
            if (!validPassword) {
                return res.status(400)
                    .json({ message: `Введено невірний пароль` })
            }
            const token = generateAccessToken(user._id)   // Generate JWT for user
            return res.json({ token: `Bearer ${token}` })    // Send JWT to the client
        } catch (e) {
            console.log(e)
            res.status(400)
                .json({ message: 'Login error' })
        }
    }


}

module.exports = new authController()