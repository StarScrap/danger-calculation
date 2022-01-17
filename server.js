const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth-route')
const resultsRouter = require('./routes/results-router')
const PORT = process.env.PORT || 5000

// Mongo db link
const db = 'mongodb+srv://StarScrap:<password>@cluster0.tyqpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express()

app.use(passport.initialize())
require('./middleware/auth-middleware')(passport)

// Routes
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/results', resultsRouter)

const start = async () => {
    try {
        await mongoose.connect(db)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
