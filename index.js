var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World bala!')
})

//Launch listening server on port 8081
app.listen(3000, function () {
  console.log('app listening on port 3000dddddd!')
})
