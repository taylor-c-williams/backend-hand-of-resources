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
  })

  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const melb = await Melb.getById(id);
    res.json(melb);
  })

  .patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { name, stagename, birthdate } = req.body;

    try {
      const melb = await Melb.update(id, { name, stagename, birthdate });

      res.json(melb);
    } catch (error) {
      next(error);
    }
  })
;
  
