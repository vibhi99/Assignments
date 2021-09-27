const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');

//handlebar Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

//Html page
app.get('/', (req, res) => 
    res.render('index',{
        title: 'Student Data',
        members
    })
);

//Members Api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is listening to ${PORT}`));