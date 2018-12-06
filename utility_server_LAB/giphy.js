const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const port = 3000;
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const getGIF = (req, res, next) => {
  axios.get(`http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=DVFLI34MmpBrDZog1GnStvO45irb4ahp`,
     {
      api_key: 'DVFLI34MmpBrDZog1GnStvO45irb4ahp',
      q: req.params.gif
    })
  .then(response => {
    req.gif = response.data;
    next();
  }).catch(err => console.log(err))
}

app.get('/:gif', getGIF, (req, res) => {
  console.log(req.params)
  res.json(req.gif);
})


app.listen(port, () => {
  console.log(`lISteNiNG tO pORt 30o0.`)
})
