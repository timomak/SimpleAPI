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

const health = {
  blood_pressure: 90.0,
  heart_rate: 91.0,
  drink_amount: 3.0,
  workout_time: 5.0
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}));

app.post('/post', function(req, res){
  console.log(req.body);      // your JSON
  // console.log(res.json(req.body));
  // res.json(req.body)
  res.send(req.body);    // echo the result back

});
app.get('/', (req, res) => {
  res.json(health)
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

// // Update Add Trainer
// app.put('/reviews/:id', (req, res) => {
//   Review.findByIdAndUpdate(req.params.id, req.body)
//     .then(review => {
//       res.redirect(`/reviews/${review._id}`)
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
// })



app.listen(3000, function() {
    console.log('App is listening on port 3000')
})
