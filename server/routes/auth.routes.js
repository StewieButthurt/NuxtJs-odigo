const {Router} = require('express')
const passport = require('passport')
const {login, createUser} = require('../controllers/auth.controller')
const rateLimit = require("express-rate-limit");
const router = Router()


const AuthLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 min
    max: 5, // start blocking after 5 requests
    message:
      "Too many authorization attempts, try again in an 5 min"
  });

// /api/auth/admin/token
router.get(
    '/admin/token',
    passport.authenticate('jwt', { session: false }),
    function (req, res) {
        res.status(200).json({ message: 'Token true' })
    }
)

// /api/auth/admin/login
router.post(
    '/admin/login',
    AuthLimiter,
    login
)

// /api/auth/admin/create
router.post(
    '/admin/create', 
    passport.authenticate('jwt', { session: false }),
    createUser
    )

module.exports = router