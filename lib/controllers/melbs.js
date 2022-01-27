const { Router } = require('express');
const Melb = require('../models/Melb');

module.exports = Router()
  .post('/melb', async (req, res) => {
    const melb = await Melb.insert({
      name: req.body.name,
      stagename: req.body.stagename,
      birthdate: req.body.birthdate

    });
    res.json(melb);
  })

  .get('/', async (req, res) => {
    const melb = await Melb.getAll();
    res.json(melb);
  });
