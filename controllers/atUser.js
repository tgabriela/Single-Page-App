const db = require("../config/firebase")
const bcrypt = require("bcrypt")
const saltRounds = 10


const addUser = async (req, res) => {
    try {
        let user = JSON.parse(req.params.user)
        const salt = bcrypt.genSaltSync(saltRounds)
        user.password = bcrypt.hashSync(user.password, salt)
        await db.collection('users').add(user)
        res.status(200).send("User added")
    } catch (e) {
        res.json({ response: e.message, status: 500 })
    }
}

const getAllUsers = async (req, res) => {
    try {
        let users = []
        await db.collection("users").get().then((querySnapshot) => {
            let user
            querySnapshot.forEach((doc) => {
                user = doc.data()
                user.id = doc.id
                users.push(user)
            })
        })
        res.status(200).json({ success: "success", users: users })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const getUserByEMail = async (req, res) => {
    try {
        let user = {}
        let _user = JSON.parse(req.params.user)
        await db.collection("users")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().eMail === _user.eMail) {
                        console.log(doc.data().eMail)
                        console.log(_user.eMail)
                        user = doc.data()
                        user.id = doc.id
                    }
                })
            })
        console.log(user)
        if (Object.keys(user).length !== 0)
            if (_user.password === user.password) {
                res.json({ response: "Success", user: user, status: 200 })
            } else {
                res.json({ response: "Password does not match", status: 400 })
            }
        else {
            res.json({ response: "No account with this email", status: 400 })
        }

    } catch (e) {
        res.json({ message: e.message, status: 500 })
    }
}

module.exports = { addUser, getAllUsers, getUserByEMail }




