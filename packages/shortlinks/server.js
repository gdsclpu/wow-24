const express = require('express');
const hbs = require('express-handlebars').create();
const dotenv = require('dotenv').config();

const createRouter = require('./routes/create.router');

const PORT = process.argv[2] | process.env.PORT | 3000;
const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use('/static', express.static('static'));

app.use('/create', createRouter);

app.get('/', (req, res) => {
    res.render('create');
})

app.get('*', (req, res) => {
    res.status(404).send('Are you lost baby gurl?');
});

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT} ...`);
})