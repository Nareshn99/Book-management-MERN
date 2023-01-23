const express = require('express');
const route = require('./routes/routes.js');
const multer = require("multer")

const mongoose = require('mongoose')
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


app.use(express.json())
app.use(multer().any())



mongoose.connect("mongodb+srv://priyanka99:EorbzmKpqdV7ml9W@cluster0.puozp1a.mongodb.net/Group46Database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

    .then(() => console.log("MongoDb is connected......."))
    .catch(err => console.log(err))


app.use('/', route);


app.listen(5000, function () {
    console.log('Express app running on port ' +(5000))
});