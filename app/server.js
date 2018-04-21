const path = require('path');
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;
const GITHUB = 'https://api.github.com';

app.use(express.static(path.resolve(__dirname, 'public')));

const apiRouter = express.Router();
app.use('/api', apiRouter);

// Our API routes
apiRouter.get('/', (req, res) => res.json({ api_routes: { users: '/users:username' } }));

apiRouter.get('/users/:username', (req, res) => {
  const username = req.params.username;
  axios.get(`${GITHUB}/users/${username}?access_token=${process.env.TOKEN}`)
    .then(response => res.json(response.data))
    .catch(error => console.error(error));
});

// HTML wildcard route to serve React, regular HTML, or whatever
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`Application listening on ${PORT}`));
