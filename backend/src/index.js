const express = require('express')

const app = express()
app.use(express.json())

const users = [
    {id:1, username: "root", email: "root@domian.com", password: "123"}
]


app.get('/api/user', (req, res) => {
    res.json(users)
})

app.get('/api/user/:id', (req, res) => {
    let user = users.find(user => user.id == req.params.id)
    res.json(user)
})

app.post('/api/user', (req, res) => {

    let user = req.body
    user.id = users.length + 1

    console.log(user)
    users.push(user)

    res.json(user)
} )

app.post("/api/login", (req,res) => {

    let {username, password} =  req.body



})

app.listen(3500, () => console.log("Express Ready: http://localhost:3500") )
