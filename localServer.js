var express = require('express');
var app = express();

var request = require('request')

var ngrokURL = "https://938475fe.ngrok.io/";

request({
  uri: ngrokURL + 'entrance',
  method: 'GET',

}, function (error, response, body) {
	console.log('from server', JSON.parse(body))
});