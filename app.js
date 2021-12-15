const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// middlewares
// this is a function to be called when the url is hit, it can do authentication verification etc...
// app.use('/posts', () => {
//     console.log('this is a middleware running posts page');
// });

// the middleware will run for every request
app.use(cors());        // allows cross domain access
app.use(bodyParser.json());

// now you can define the routes
// ROUTES
app.get('/', (req, res) => {
    res.send('we are on home page');
});

// this part can go crazy, create a separate file and import here
// app.get('/posts', (req, res) => {
//     res.send('we are on home page');
// });
// import posts routes
const postsRoute = require('./routes/posts');
// then use middleware to use it
app.use('/posts', postsRoute);

// more routes if needed...
//app.use('/users', usersRoute);

// app.get('/posts', (req, res) => {
//     res.send('we are on posts page');
// });

// connect to DB
// mongoose.connect('mongodb+srv://ling:admin@cluster0.xvavp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//     { useNewUrlParser: true }, () => {
//         console.log('connect to mlab free shared mongoDB');
//     })

// use .env to store the connection creditials
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true }, () => {
        console.log('connect to mlab free shared mongoDB');
    })

// start listening to the server
app.listen(3000);