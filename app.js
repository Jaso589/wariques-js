const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config({path:'env/.env'});

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'))

app.set('view engine', 'ejs');

const bcryptjs = require('bcryptjs');

const session =  require('express-session');
app.use(session({
    secret:'secret',
    resave:'true',
    saveUninitialized: true
}));

const connection = require('./database/db')

app.get('/', (req, res) =>{
    res.render('index')
})
app.get('/dudas', (req, res) =>{
    res.render('dudas')
})

app.get('/condiciones', (req, res) =>{
    res.render('condiciones')
})
app.get('/register', (req, res) =>{
    res.render('register')
})
app.get('/login', (req, res) =>{
    res.render('login')
})
app.get('/favoritos', (req, res) =>{
    res.render('favoritos')
})

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log('executing...')
})