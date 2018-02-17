// const express = require ('express');
//
// //set up express app
//
// const app = express();
//
// $curl -H "Accept: application/json" 'http://localhost:8080/otp/routers/default/plan?fromPlace=52.5895,13.2836&toPlace=52.5461,13.3588&date=2017/04/04&time=12:00:00'
//
// app.get('/', function(req, res){
//   console.log('Get request');
//
//   res.send({name: 'Yoshi'});
//
// });
//
// //listen for rquest
//
// app.listen(process.env.port || 4000, function(){
//   console.log('now listening for request');
// });


// Install request by running "npm install --save request"
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.sandbox.mobilepay.dk/subscriptions/api/merchants/me',
  headers:
   { correlationid: '^2.0.0',
     accept: 'application/json',
     'x-ibm-client-secret': 'X4kU8gH0mS4sU8tC1iM8oW0sM5sN7wK7hA2sB2pJ5iO0vA2rD1',
     'x-ibm-client-id': 'ec42c049-ecde-431a-99e0-c7aef75fc044' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});
