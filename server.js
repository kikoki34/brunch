const app = require('express')();
//const pug = require('pug');

app.set('view engine', 'pug')

app.get('/', (req,res) => {
  res.render('gip');
})


app.listen('9001', (req,res) => {
  console.log("Gippy Up");
});
