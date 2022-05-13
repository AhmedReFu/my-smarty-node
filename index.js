const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('I am Ahmed ReFat!. I always help people all kind situation')
})
const users = [
    { id: 1, name: 'Ahmed ReFat', email: 'ahmedrefat@gmail.com', phone: '01711111111' },
    { id: 2, name: 'Ahmed Faria', email: 'ahmedFaria@gmail.com', phone: '01722222222' },
    { id: 3, name: 'Ahmed Emu', email: 'ahmedEmu@gmail.com', phone: '01733333333' },
    { id: 4, name: 'Ahmed Sultana', email: 'ahmedSultana@gmail.com', phone: '01744444444' },
    { id: 5, name: 'Ahmed Supty', email: 'ahmedsupty@gmail.com', phone: '01755555555' },
    { id: 6, name: 'Ahmed suraia', email: 'ahmedsuruaia@gmail.com', phone: '01766666666' },
    { id: 7, name: 'Ahmed Nazmul', email: 'ahmednazmul@gmail.com', phone: '01788888888' }
]
app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    } else {
        res.send(users);
    }
})
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1
    users.push(user)
    res.send(user);
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange'])
})
app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavor');
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user)
});

app.listen(port, () => {
    console.log('Listening to port', port)
})