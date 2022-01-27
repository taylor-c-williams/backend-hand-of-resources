const { Router } = require('express');
const Melaniec = require('../models/Melaniec');

module.exports = Router()
  .post('/melaniec', async (req, res) => {
    const melaniec = await Melaniec.insert({
      name: req.body.name,
      stagename: req. body.stagename,
      birthdate: req.body.birthdate
    });
    res.json(melaniec);
  });
