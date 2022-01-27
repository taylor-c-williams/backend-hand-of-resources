const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Melb = require('../lib/models/Melb');

describe('backend routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('creates a Mel B. entry ', async () => {
    const mel = await Melb.insert({ name:'Melanie Janine Brown', stagename:'Scary Spice', birthdate:'5/29/1975' });

    expect(mel).toEqual({
      id: expect.any(String),
      name: 'Melanie Janine Brown',
      stagename: 'Scary Spice',
      birthdate: '5/29/1975'
    });
  });

  it('gets ALL Mel Bs', async () => {
    const realMel = await Melb.insert({ name:'Melanie Janine Brown', stagename:'Scary Spice', birthdate:'5/29/1975' });

    const anotherMel = await Melb.insert({ name:'Mel J. Brown', stagename:'Scary Spice', birthdate:'May 29th, 1975' });

    const res = await request(app).get('/api/v1/spiceupyourlife/melb');
    expect(res.body).toEqual([realMel, anotherMel]);
  });
    
});

