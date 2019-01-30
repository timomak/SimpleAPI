const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const trainers = {
  Tom: {
    pokemon : ['pikachu', 'squritle']
  },
  Sam: {
    pokemon : ['charmander', 'gengar']
  }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}));

app.get('/trainer-api', (req, res) => {
  res.json(trainers)
});

app.get('/trainer-api/:trainerName', (req, res) => {
  res.json(trainers[req.params.trainerName])
});


app.listen(3000, function() {
    console.log('App is listening on port 3000')
})
