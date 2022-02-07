const { Router } = require('express');
const Geri = require('../models/Geri');

module.exports = Router()

  .post('/geri', async (req, res) => {
    const geri = await Geri.insert({
      name: req.body.name,
      stagename: req. body.stagename,
      birthdate: req.body.birthdate
    });
    res.json(geri);
  })

  .get('/', async(req, res) => {
    const geri = await Geri.getAll();
    res.json(geri);
  })

  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const geri = await Geri.getById(id);
    res.json(geri);
  })

;

