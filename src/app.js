require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;

// Use morgan to log HTTP requests
app.use(morgan('dev'));

app.use(express.json());
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});