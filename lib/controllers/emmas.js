const { Router } = require('express');
const Emma = require('../models/Emma');

module.exports = Router()
  .post('/emma', async (req, res) => {
    const emma = await Emma.insert({
      name: req.body.name,
      stagename: req. body.stagename,
      birthdate: req.body.birthdate
    });
    res.json(emma);
  })

  .get('/', async(req, res) => {
    const emma = await Emma.getAll();
    res.json(emma);
  });
