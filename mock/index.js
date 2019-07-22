const express = require('express');
const app = express();
const port = 5000;
const data = require('./data.json');

app.get('/api/restaurants', (req, res) => res.send(data.data));

app.listen(port, () => `Server running in port ${port}`);