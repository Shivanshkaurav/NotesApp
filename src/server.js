// Initialization
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const mongoDbPath = "mongodb+srv://Shivansh04:Shivansh04@cluster0.fburzrl.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoDbPath).then(function(){

    app.get("/", function(req, res){
        const response = { statuscode: res.statusCode, message: "API Works!"};
        res.json(response);
    });
    
    const noteRouter = require('./Route/Note');
    app.use("/notes", noteRouter);
});

// Starting Server on a Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("App Running on the PORT:" + PORT);
})