var express = require('express'),
    mongoose = require('mongoose'),
    Promise = require('bluebird'),
    bodyParsre = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/src/client'));
app.use(bodyParsre.json());

Promise.promisifyAll(mongoose);
mongoose.connectAsync('mongodb://localhost:27017/testdb');

var ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

var ContactModel = mongoose.model('Contact', ContactSchema, 'contacts');

var REST = require('express-restify')(app, mongoose);
REST.register('/api/contacts', 'Contact');

app.listen(3000, function() {

    console.log("Server running at http://localhost:3000");
});
