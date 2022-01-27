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

  it('gets all Melanie Cs', async () => {
    const realMelaniec = await Melaniec.insert({ name:'Melanie Jayne Chisholm', stagename: 'Sporty Spice', birthdate:'1/12/1974' });
  
    const fakeMelaniec = await Melaniec.insert({ name: 'Fake Melanie', stagename: 'Stubby Spice', birthdate: '1/22/2076' });
  
    const res = await request(app).get('/api/v1/spiceupyourlife/melaniec');
    expect(res.body).toEqual([realMelaniec, fakeMelaniec]);
  });
  
  it ('fetches a single Melanie C. by her ID', async () => {
    const melaniec = await Melaniec.insert({ name: 'Melanie J. Chisholm', stagename: 'Sporty Spice', birthdate:'1/12/1974' });
      
    const res = await request(app).get(`/api/v1/spiceupyourlife/melaniec/${melaniec.id}`);
  
    expect(res.body).toEqual(melaniec);
  });
  

});

