const express = require('express')
const app = express()
const PORT = 3000

app.get('/', function(req, res){
  res.send('Welcome to all star home page')
})
app.get('/users', function(req, res){
  res.send('All dem users')
})

app.listen(PORT, function(){
  console.log("We're running on server", PORT)

})
