var express = require('express'),
    mongoose = require('mongoose');

var app = express();
app.use(express.static(__dirname + '/src/client'));
var REST = require('express-restify')(app);

var MONGO_DB;
var DOCKER_DB = process.env.DB_PORT;
if ( DOCKER_DB ) {
  MONGO_DB = DOCKER_DB.replace( 'tcp', 'mongodb' ) + '/testdb';
} else {
  MONGO_DB = process.env.MONGODB;
}
var retry = 0;
console.log(MONGO_DB);
mongoose.connect(MONGO_DB);

var ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

var ContactModel = mongoose.model('Contact', ContactSchema, 'contacts');

REST.register('/api/contacts', 'Contact');

app.listen(3000, function() {

    console.log("Server running at http://localhost:3000");
});
