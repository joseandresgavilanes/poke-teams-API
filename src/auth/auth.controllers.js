const {getUserByEmail} = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

const login = (email, password) => {
    const user = getUserByEmail(email)

    if(user){
        const verify_password = comparePassword(password, user.password)
        if(verify_password){
            return user
        }
    }
    return false
}

exports.login = login
