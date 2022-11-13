const request = require('request');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const mysql = require('./connection').con;

const url = 'https://phone-specs-api.azharimm.dev/v2/latest';
const brandURL = 'https://phone-specs-api.azharimm.dev/v2/brands';
const searchURL = 'https://phone-specs-api.azharimm.dev/v2/search';

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));

// Routing

app.get('/view', (req, res) => {
  request({ url }, (error, response) => {
    if (error) console.log(error, 'error');
    const data = JSON.parse(response.body);
    res.send(data.data);
  });
});

app.get('/search', (req, res) => {
  request({ url: `${searchURL}?query=${req.query.search}` }, (error, response) => {
    if (error) {
      console.log(error, 'error');
    }
    const data = JSON.parse(response.body);
    res.send(data.data);
  });
});

app.post('/add-fav', (req, res) => {
  const data = req.body;
  let qry = 'INSERT INTO fav (mobile-name, brand-name, image)';
  // mysql.query(qry, [data], (err, results) => {
  //   if (err) throw err;
  //   console.log('1 record inserted');
  //   res.send(results);
  // });
});

app.get('/view-all', (req, res) => {
  let qry = 'SELECT * from fav';
  // mysql.query(qry, (err, results) => {
  //   if (err) throw err;
  //   res.send(results);
  // });
});

//Create Server
app.listen(port, (err) => {
  if (err) throw err;
  else console.log('Server is running at port %d:', port);
});
