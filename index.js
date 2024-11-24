const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const users= [
    {id: 1, name: 'Sabana', email: 'sabana@gamil.com'},
    {id: 2, name: 'sokina', email: 'sokina@gamil.com'},
    {id: 3, name: 'Sabnoor', email: 'zabnoor@gamil.com'},
]

app.get('/', (req, res)=>{
    res.send("User management server is running")
});
app.get('/users', (req, res)=>{
    res.send(users)
});
app.post('/users', (req, res)=>{
    console.log("API hitting")
    console.log(req.body);
    const newUser = req.body
    newUser.id = users.length +1
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, ()=>{
    console.log(`server is running on PORT: ${port}`)
})