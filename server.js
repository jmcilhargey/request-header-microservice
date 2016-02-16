"use strict";

var express = require("express");
var app = express();

app.use(express.static(__dirname));

app.post("/", function(req, res) {
  console.log(req.headers);
  res.json({ 
  ipaddress : req.headers["x-forwarded-for"] || req.headers.remoteAddress, 
  language : req.headers["accept-language"].split(",")[0], 
  opsystem : req.headers["user-agent"].split("(")[1].split(")")[0]
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Ready! Listening on port " + process.env.PORT);
});