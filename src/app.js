const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

require('dotenv').config();

require('./db');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

const authRoutes = require('./routes/auth')
const catalogRoutes = require('./routes/catalog')

app.use('/', authRoutes);
app.use('/catalog', catalogRoutes);


module.exports = app;