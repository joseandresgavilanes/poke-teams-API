const userControllers = require('./users.controllers')

const getAll = (req, res) => {
    const data = userControllers.getAllUsers()
    return res.status(200).json({items: data.length, users: data})
}

const getById = (req, res) => {
    const id = req.params.id
    const data = userControllers.getUserById(id)

    if(data){
        return res.status(200).json(data)
    } else {
        return res.status(404).json({message: 'Invalid ID'})
    }

}

const register = (req ,res) => {
    const data = req.body
    if(
        !data.name || 
        !data.email ||
        !data.password
    ){
        return res.status(400).json({
            message: 'All fields must be completed',
            fields: {
                name: 'string',email: 'example@example.com', password: 'string'
            }
        })
    } else {
        const response = userControllers.createUser(data)
        return res.status(201).json({
            message: `User created succesfully with id: ${response.id}`,
            user: response
        })
    }
}

const remove = (req, res) => {
    const id = req.params.id

    const data = userControllers.deleteUser(id)

    if(data){
        return res.status(204).json()
    } else {
        return res.status(400).json({
            message: 'Invalid ID'
        })
    }
}

const edit = (req, res) => {
    const data = req.body
    const id = req.params.id

    if(
        !data.name ||
        !data.email ||
        !data.password
    ) {
        return res.status(400).json({
            message: 'All fields must be completed',
            fields: {
                name: 'string',email: 'example@example.com', password: 'string'
            }
        })
    } else {
        const response = userControllers.editUser(id,data)
        return res.status(200).json({
            message: 'User edited succesfully',
            user: response
        })
    }
}

module.exports = {
    getAll,
    getById,
    edit,
    remove,
    register
}