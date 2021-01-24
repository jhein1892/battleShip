const express = require("express");
const app = express();
const PORT = 8080; 
app.set("view engine", "ejs");

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
  res.render('game')
})










app.get('*', (req, res) => {
  res.redirect('/login');
});








app.listen(PORT, () => {
  console.log('Example'); 
});

