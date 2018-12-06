const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.get('/math/add/', (req, res) => {
  // const query = res.query;
  let num1 = req.query.num1;
  let num2 = req.query.num2;
  // console.log(num1.params.query)
  if (!isNaN(num1) && !isNaN(num2)) {
    console.log(!isNaN(num1))

    let data = parseInt(num1) + parseInt(num2);
    res.json({ input: req.query, sumString: `${req.query.num1} + ${req.query.num2}`, sum: data });
  } else {
    res.send(`Please enter a valid number.`);
  }

});

app.get('/math/sub/', (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;

  if (!isNaN(num1) && !isNaN(num2)) {
    let data = parseInt(num1) - parseInt(num2);
    res.json({ input: req.query, sumString: `${req.query.num1} - ${req.query.num2}`, sum: data });
  } else {
    res.send(`Please enter valid number`);
  }
})

app.get('/math/multiply/', (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;

  if(!isNaN(num1) && !isNaN(num2)) {
    let data = parseInt(num1) * parseInt(num2);
    res.json({ input: req.query, sumString: `${req.query.num1} * ${req.query.num2}`, sum: data})
  } else {
    res.send(`Please enter a valid number.`)
  }
})

app.get('/math/divide/', (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;

  if(!isNaN(num1) && !isNaN(num2)) {
    let data = parseInt(num1) / parseInt(num2);
    res.json({ input: req.query, sumString: `${req.query.num1} / ${req.query.num2}`, sum: data })
  }
})

app.listen(3000, () => {
  console.log('Listening to port 3000.')
});
