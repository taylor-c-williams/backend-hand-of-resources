const { Router } = require('express');
const Victoria = require('../models/Victoria');

module.exports = Router()

  .post('/victoria', async (req, res) => {
    const victoria = await Victoria.insert({
      name: req.body.name,
      stagename: req. body.stagename,
      birthdate: req.body.birthdate
    });
    res.json(victoria);
  })

  .get('/', async(req, res) => {
    const victoria = await Victoria.getAll();
    res.json(victoria);
  })

  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const victoria = await Victoria.getById(id);
    res.json(victoria);
  })  
  
  
;
