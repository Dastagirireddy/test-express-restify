var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

/////////////////////////////////////////////////
// App level vairables and initializations
/////////////////////////////////////////////////
var app,
	port = process.env.PORT || 5000,
	contact = require('./api/contact.controller.js');

app = express();

/////////////////////////////////////////////////
// Connect to MongoDb 
/////////////////////////////////////////////////
var mognoDbUrl = "mongodb://localhost:27017/contactlist";
mongoose.connect(mognoDbUrl, function(err, result){

	if(err) {

		console.log("Connection failure to the url:", mognoDbUrl);
		return;
	}

	console.log("Connection successful to the url: ", mognoDbUrl);
});

/////////////////////////////////////////////////
// App level configurations
/////////////////////////////////////////////////
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//////////////////////////////////////////////////
// REST API
//////////////////////////////////////////////////
app.post('/api/contact', contact.add);
app.get('/api/contact', contact.getAllContacts);
app.put('/api/contact/:id', contact.update);
app.delete('/api/contact/:id', contact.remove);


app.listen(port, function(){

	console.log("Development server running at http://localhost:",port);
});