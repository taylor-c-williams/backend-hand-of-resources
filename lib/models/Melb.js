const pool = require('../utils/pool');

module.exports = class Melb {
  id;
  name;
  stagename;
  birthday;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.stagename = row.stagename;
    this.birthday = row.birthday;
  }

  static async insert({ name, stagename, birthday }) {
    const { rows } = await pool.query(
      'INSERT INTO melb (name, stagename, birthday VALUES ($1,$2,$3) RETURNING *',
      [name, stagename, birthday]
    );
    return new Melb(rows[0]);
  }
};
