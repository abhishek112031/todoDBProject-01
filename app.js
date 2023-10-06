const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const cors = require('cors');

//database:
const database = require('./util/database');

//models:
const User=require('./models/user');
const Todo=require('./models/todo');

//routers:
const userRoutes = require('./routers/user')

const app = express();

//common middlewares:
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app middlewares:
app.use(userRoutes);



//relationships:
User.hasMany(Todo);
Todo.belongsTo(User);

database
.sync()
    .then(() => {

        app.listen(3000, () => {
            console.log('app is running on port 3000')
        });
    })




