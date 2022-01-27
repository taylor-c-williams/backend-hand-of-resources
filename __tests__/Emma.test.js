const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const Emma = require('../lib/models/Emma');

describe('Emma Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('creates an Emma entry', async () => {
    const emma = await Emma.insert({ name:'Emma Lee Bunton', stagename:'Baby Spice', birthdate:'1/21/1976' });

    expect(emma).toEqual({
      id: expect.any(String),
      name: 'Emma Lee Bunton',
      stagename: 'Baby Spice',
      birthdate: '1/21/1976'
    });
  });

  it('gets all Emmas', async () => {
    const realEmma = await Emma.insert({ name:'Emma Lee Bunton', stagename: 'Baby Spice', birthdate:'1/21/1976' });

    const fakeEmma = await Emma.insert({ name: 'Fake Emma', stagename: 'Bubby Spice', birthdate: '1/22/1976' });

    const res = await request(app).get('/api/v1/spiceupyourlife/emma');
    expect(res.body).toEqual([realEmma, fakeEmma]);
  });
});
