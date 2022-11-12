const { register } = require('../users/user.http')
const { loginUser } = require('./auth.http')

const router = require('express').Router()


router.post('/login', loginUser)

router.post('/register', register)

exports.router = router
