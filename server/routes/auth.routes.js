const {Router} = require('express')
const passport = require('passport')
const {login, createUser} = require('../controllers/auth.controller')
const rateLimit = require("express-rate-limit");
const router = Router()


const AuthLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 5, // start blocking after 5 requests
    message:
      "Too many authorization attempts, try again in an hour"
  });

// /api/auth/admin/token
router.get(
    '/admin/token',
    passport.authenticate('jwt', { session: false }),
    function (req, res) {
        res.status(201).json({ message: 'Token true' })
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