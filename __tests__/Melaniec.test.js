const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const Melaniec = require('../lib/models/Melaniec');

describe('Melanie C. Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('creates a Melanie C. entry', async () => {
    const melaniec = await Melaniec.insert({ name:'Melanie Jayne Chisholm', stagename:'Sporty Spice', birthdate:'1/12/1974' });

    expect(melaniec).toEqual({
      id: expect.any(String),
      name: 'Melanie Jayne Chisholm',
      stagename: 'Sporty Spice',
      birthdate: '1/12/1974'
    });

  });
});
