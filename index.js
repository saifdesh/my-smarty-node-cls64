const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello node mon ')
});

const users =
    [
        { Id: 1, name: 'saif', email: 'saif@gamil.com', phone: '0171465841' },
        { Id: 2, name: 'Kaif', email: 'kaif@gamil.com', phone: '0171465841' },
        { Id: 3, name: 'Tayef', email: 'taif@gamil.com', phone: '0171465841' },
        { Id: 4, name: 'Julia', email: 'julia@gamil.com', phone: '0171465841' },
        { Id: 5, name: 'Yeasmin', email: 'Yeasmin@gamil.com', phone: '0171465841' },
        { Id: 6, name: 'Peter', email: 'peter@gamil.com', phone: '0171465841' }

    ]

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', async (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})


app.listen(port, () => {
    console.log('Listen to port', port)
});
