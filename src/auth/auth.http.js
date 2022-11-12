const jwt = require('jsonwebtoken')

const authController = require('./auth.controllers')

const loginUser = (req, res) => {
    const data = req.body

    if(!data.email || !data.password){
        return res.status(400).json({message: 'Missing Data'})
    }
    
    const response = authController.login(data.email, data.password)

    if(response){
        const token = jwt.sign({
            id: response.id,
            email: response.email
        }, 'academlo')
        return res.status(200).json({message: 'Tus credenciales son exitosas', token})

    } else {
        return res.status(401).json({message: 'Invalid Credentials'})
    }

}

exports.loginUser = loginUser
