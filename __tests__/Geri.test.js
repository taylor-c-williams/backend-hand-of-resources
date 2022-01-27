const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const Geri = require('../lib/models/Geri');

describe('Geri Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('creates a Geri entry', async () => {
    const geri = await Geri.insert({ name:'Geraldine Estelle Halliwell', stagename:'Ginger Spice', birthdate:'8/6/1972' });

    expect(geri).toEqual({
      id: expect.any(String),
      name:'Geraldine Estelle Halliwell', 
      stagename:'Ginger Spice', 
      birthdate:'8/6/1972' });
  });

  it('gets all Geris', async () => {
    const realGeri = await Geri.insert({ name:'Geraldine Estelle Halliwell', stagename:'Ginger Spice', birthdate:'8/6/1972' });

    const fakeGeri = await Geri.insert({ name: 'Fake Geri', stagename: 'Grubby Spice', birthdate: '1/22/4276' });

    const res = await request(app).get('/api/v1/spiceupyourlife/geri');
    expect(res.body).toEqual([realGeri, fakeGeri]);
  });

  it ('fetches a single Geri by her ID', async () => {
    const geri = await Geri.insert({ name:'Geraldine Estelle Halliwell', stagename:'Ginger Spice', birthdate:'8/6/1972' });
    
    const res = await request(app).get(`/api/v1/spiceupyourlife/geri/${geri.id}`);

    expect(res.body).toEqual(geri);
  });

});
