const express = require ('express');
const routes = require ('./routes/api');

const app = express ();

app.use ('/api',routes);

app.listen (4000, function(){

	console.log ('listening 4000');
});

