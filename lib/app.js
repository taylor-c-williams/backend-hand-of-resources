const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/api/v1/spiceupyourlife/melb', require ('./controllers/melbs'));
app.use('/api/v1/spiceupyourlife/emma', require ('./controllers/emmas'));
app.use('/api/v1/spiceupyourlife/melaniec', require ('./controllers/melaniecs'));
app.use('/api/v1/spiceupyourlife/geri', require ('./controllers/geris'));
app.use('/api/v1/spiceupyourlife/victoria', require ('./controllers/victorias'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
