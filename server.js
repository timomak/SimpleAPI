const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const trainers = {
  1: {
    name: 'Tom',
    age: '24',
    pokemon : ['pikachu', 'squritle', 'charizard']
  },
  2: {
    name: 'Sam',
    age: '22',
    pokemon : ['charmander', 'gengar']
  }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.json(trainers)
});

app.get('/trainer-api', (req, res) => {
  res.json(trainers)
});

app.get('/trainer-api/:arrayNum', (req, res) => {
  res.json(trainers[req.params.arrayNum])
});

app.get('/trainer-api/:arrayNum/name', (req, res) => {
  res.json(trainers[req.params.arrayNum].name)
});

app.get('/trainer-api/:arrayNum/age', (req, res) => {
  res.json(trainers[req.params.arrayNum].age)
});

app.get('/trainer-api/:arrayNum/pokemon', (req, res) => {
  res.json(trainers[req.params.arrayNum].pokemon)
});



app.listen(3000, function() {
    console.log('App is listening on port 3000')
})
