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

    const res = await request(app).get('api/v1/spiceupyourlife');

    expect(res).toEqual({
      id: expect.any(String),
      name: 'Melanie Janine Brown',
      stagename: 'Scary Spice',
      birthdate: '5/29/1975'
    });
  });
});
