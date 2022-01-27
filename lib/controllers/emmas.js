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
  })

  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const emma = await Emma.getById(id);
    res.json(emma);
  })

  .patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { name, stagename, birthdate } = req.body;
    
    try {
      const emma = await Emma.update(id, { name, stagename, birthdate });
      res.json(emma);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', async (req, res) => {
    const { id } = req.params;
    const emma = await Emma.delete(id);
    res.json(emma);
  })

;
