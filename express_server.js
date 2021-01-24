const express = require("express");
const app = express();
const PORT = 8080; 
app.set("view engine", "ejs");

//Setting Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));

// Helper
function generateRandomString() {
  return Math.floor((1 + Math.random()) * 0x100000).toString(16);
}

// Databases: 

let ShipSpots = {
  carrier: [],
  battleship: [],
  cruiser: [],
  submarine: [],
  destroyer: []
}; 

app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/register', (req, res) => {
  res.render('register');
});
app.post('/register', (req, res) => {
  res.redirect('/home')
});
app.get('/home', (req, res) => [
  res.render('home')
]);
app.post('/game', (req, res) => {
  let gameNum = generateRandomString()
  console.log(req.body.carrierStart)
  ShipSpots[gameNum] = {
    carrier: [req.body.carrierStart, req.body.carrierFinish],
    battleship: [],
    cruiser: [],
    submarine: [],
    destroyer: []
  }
  console.log(ShipSpots[gameNum])
  res.render('game')
});
app.get('/game', (req,res) => {
  console.log(req.body)
})










app.get('*', (req, res) => {
  res.redirect('/login');
});








app.listen(PORT, () => {
  console.log('Example'); 
});

