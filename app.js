const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

//import Routes
const productsRoute = require('./routes/products');
//connect to db

mongoose.connect(process.env.DB_Connection, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
	console.log('connected to DB')
);

//Middlewares(functions that are executed when a specific route is hit)

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/products', productsRoute);
app.use(express.json());

//Routes
app.get('/', (req, res) => {
	res.send('This is home route');
});

//Listening on port to start the server

app.listen(3000);
