const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const Victoria = require('../lib/models/Emma');

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


});
