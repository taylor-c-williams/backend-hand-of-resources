const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const Victoria = require('../lib/models/Victoria');

describe('Victoria Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('creates a Victoria entry', async () => {
    const victoria = await Victoria.insert({ name:'Victoria Caroline Adams', stagename:'Posh Spice', birthdate:'4/17/1974' });

    expect(victoria).toEqual({
      id: expect.any(String),
      name: 'Victoria Caroline Adams',
      stagename: 'Posh Spice',
      birthdate: '4/17/1974'
    });
  });

  it('creates a Victoria entry', async () => {
    const victoria = await Victoria.insert({ name:'Victoria Caroline Adams', stagename:'Posh Spice', birthdate:'4/17/1974' });

    expect(victoria).toEqual({
      id: expect.any(String),
      name: 'Victoria Caroline Adams',
      stagename: 'Posh Spice',
      birthdate: '4/17/1974'
    });
  });

  it('gets all Victoria', async () => {
    const realVictoria = await Victoria.insert({ name:'Victoria Caroline Adams', stagename: 'Posh Spice', birthdate:'4/17/1974' });

    const fakeVictoria = await Victoria.insert({ name: 'Fake Victoria', stagename: 'Pubby Spice', birthdate: '1/22/5376' });

    const res = await request(app).get('/api/v1/spiceupyourlife/victoria');
    expect(res.body).toEqual([realVictoria, fakeVictoria]);
  });

  it ('fetches a single Victoria by her ID', async () => {
    const victoria = await Victoria.insert({ name: 'Victoria Caroline Adams', stagename: 'Posh Spice', birthdate:'4/17/1974' });
    
    const res = await request(app).get(`/api/v1/spiceupyourlife/victoria/${victoria.id}`);

    expect(res.body).toEqual(victoria);
  });


});
