const { Schema, model } = require('mongoose')

const Result = new Schema({
    userId: {
        type: Schema.Types.ObjectId,        // Refered Drug to User
        ref: 'User'
    },
    enterpriseName: {
        type: String,
        required: true
    },
    resultsList: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = model('Result', Result)