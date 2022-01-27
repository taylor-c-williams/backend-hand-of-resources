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
  })

  .get('/', async (req, res) => {
    const melaniec = await Melaniec.getAll();
    res.json(melaniec);
  })

  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const melaniec = await Melaniec.getById(id);
    res.json(melaniec);
  })

;
