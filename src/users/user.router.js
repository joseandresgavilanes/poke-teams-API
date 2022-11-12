const router = require('express').Router()

const userServices = require('./user.http')


router.get('/', userServices.getAll)


router.route('/:id')
    .get(userServices.getById)
    .delete(userServices.remove)
    .put(userServices.edit)


exports.router = router
