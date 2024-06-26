const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/profile', (req, res) => {
    res.render('profile.ejs');
});

app.get('/works', (req, res) => {
    res.render('works.ejs');
});

app.get('/yuki_sakakimas_portfolio', (req, res) => {
    res.render('yuki_sakakimas_portfolio.ejs');
});

app.get('/quick_quill', (req, res) => {
    res.render('quick_quill.ejs');
});

app.listen(process.env.PORT || 3000);