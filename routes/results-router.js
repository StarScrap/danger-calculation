const Router = require('express')
const passport = require('passport')
const router = new Router()
const controller = require('../controllers/results-controller')

// Add result
router.post('/post-result', passport.authenticate('jwt', {session: false}), controller.addResult)
// Get results
router.get('/get-results', passport.authenticate('jwt', {session: false}), controller.getResults)
// Get result
router.get('/get-result/:id', passport.authenticate('jwt', {session: false}), controller.getResult)
// Delete result
router.delete('/delete-result/:id', passport.authenticate('jwt', {session: false}), controller.deleteResult)

module.exports = router