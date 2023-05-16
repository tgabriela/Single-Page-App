const db = require("../config/firebase")
const bcrypt = require("bcrypt")

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

const updateUser = async (req, res) => {
    await db.collection ('users').add({
        email: email,
        password: password
    })
      console.log('Added data', res.id);{
        
}};

const getUserByEMail = async (req, res) => {
    try {
        let user = {}
        let _user = JSON.parse(req.params.user)
        await db.collection("users")
        .get()
        .then((querySnapshot) => {   
          querySnapshot.forEach((doc) => {
            if(doc.data().eMail === _user.eMail) {
                  user= doc.data()
                  user.id = doc.id
            }
          })
        })
        if(Object.keys(user).length !== 0) {
            if(bcrypt.compareSync(_user.password, user.password)) {
                res.json({ response: "Success", user: user, status:200 })
            } else {
                res.json({response: "Incorrect password", status: 400})
            }
        } else {
            res.json({response: "No account with this email", status:400})
        }

    } catch (e) {
        res.json({ message: e.message, status: 500 })
    }
}  

module.exports = {getAllUsers, updateUser, getUserByEMail}

