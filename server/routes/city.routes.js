const passport = require('passport')
const {Router} = require('express')
const ctr = require('../controllers/city.controller')
const router = Router()

//Admin
// /api/city

router.post(
    '/admin/create-city',
    passport.authenticate('jwt', { session: false }),
    ctr.create,
    function (req, res) {
        res.status(200)
    }
)

router.post(
    '/admin/update-city',
    passport.authenticate('jwt', { session: false }),
    ctr.updateCity,
    function (req, res) {
        res.status(200)
    }
)

router.get(
    '/',
    ctr.getCity,
    function (req, res) {
        res.status(200)
    }
)

module.exports = router