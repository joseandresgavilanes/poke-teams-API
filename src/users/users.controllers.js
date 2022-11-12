//? Dependencias
const uuid = require('uuid')

//? Archivos importados
const { hashPassword } = require('../utils/crypto')

const userDB = [{
    id: 'a9c33907-6440-4cb8-a426-8764133a08c3',
    name: "sahid",
    email: "admin@admin.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC"
}];

const createUser = (data) => {
    const newUser = {
        id: uuid.v4(),
        name: data.name,
        email: data.email,
        password: hashPassword(data.password)
    }
    userDB.push(newUser)
    return newUser
}

const getAllUsers = () => {
    return userDB
}

const getUserById = (id) => {
    const data = userDB.filter(item => item.id === id)
    return data[0]
}

const deleteUser = (id) => {
    const index = userDB.findIndex(item => item.id === id)
    userDB.splice(index, 1)
    return index !== -1
}

const editUser = (id, data) => {
    const index = userDB.findIndex(item => item.id === id)
    if(index !== -1){
        userDB[index] = {
            id: id,
            name: data.name,
            email: data.email,
            password: hashPassword(data.password)
        }
        return userDB[index]
    }else{
        return createUser(data)
    }
}

const getUserByEmail = (email) => {
    const data = userDB.filter(user => user.email === email)
    return data.length ? data[0] : false
}


/*

[{email: "sahid.kick@academlo.com"}].length
[].length 


[5, 4, 3, 3, 16]
[4, 3, 3, 16]
? index:  arr.findIndex(item => item === 3) 2

? filter: arr.filter(item => item === 3) [3, 3]
*/

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    editUser,
    getUserByEmail
}

