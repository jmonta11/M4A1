const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// routes
const studentRouter = require('./routes/studentRoute');
app.use('/student', studentRouter);
const gradeRouter = require('./routes/gradeRoute');
app.use('/grade', gradeRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}`));

// connect to the database
const mongoose = require('mongoose');

// synchronous connection
//mongoose.connect('mongodb://localhost:27107/StudentDB', {useNewUrlParser: true}, (err) => {
//    if (!err) {console.log('MongoDB connection succeeded.')}
//    else {console.log('Error in DB connection : ' + err)}
//});

// asynchronous connection - USER AND PASSWORD REMOVED FOR GitHub
mongoose.connect('mongodb+srv://<user>:<pass>@cluster0.qopgnyc.mongodb.net/demodb', {useNewUrlParser: true})
    .then(() => console.log('MongoDB connection successful'))
    .catch((err) => console.error(err));