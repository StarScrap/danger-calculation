const Result = require('../models/result')


class ResultsController {

    async addResult(req, res) {

        try {
            const { resultsList, enterpriseName } = req.body;    // Get input data from for     // Decoded jwt by using secret-key
            const userId = req.user.id
            const threates = new Result({ userId, enterpriseName, resultsList })    // Create new Result
            await threates.save()       // Save new Drug in DB      
            return res.json({ message: "Список загроз успішно додано" })
        } catch (e) {
            console.log(e)
            res.status(400)
                .json({ message: 'Add Results error' })
        }

    }

    async getResults(req, res) {
        try {
            const results = await Result.find({ userId: req.user.id })       // Find results which have carent user Id
            return res.json(results)
        } catch (e) {
            console.log(e)
            res.status(400)
                .json({ message: 'Get Results error' })
        }

    }


    async getResult(req, res) {
        try {
            const result = await Result.findById({ _id: req.params.id })       // Find result by id
            if (result) {
                return res.json(result)
            } else {
                return res.status(400)
                    .json({ message: 'Загрооз не знайдено' })
            }
        } catch (e) {
            console.log(e)
            res.status(400)
                .json({ message: 'Get result error' })
        }
    }

    async deleteResult(req, res) {
        try {
            const result = await Result.findByIdAndRemove({ _id: req.params.id })      // Find result by id and remove
            if (result) {
                return res.json({ message: "Результат успішно усунуто" })
            } else if (!result) {
                return res.status(400)
                    .json({ message: "Результат  не знайдений" })
            }
        } catch (e) {
            console.log(e)
            res.status(400)
                .json({ message: 'Remove result error' })
        }
    }

}

module.exports = new ResultsController()