const pool = require('../utils/pool');

module.exports = class Emma {
  id;
  name;
  stagename;
  birthdate;
  
  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.stagename = row.stagename;
    this.birthdate = row.birthdate;
  }

  static async insert({ name, stagename, birthdate })  {
    const { rows } = await pool.query (
      'INSERT INTO emma (name, stagename, birthdate) VALUES ($1, $2,$3) RETURNING *',
      [name, stagename, birthdate]
    );
    return new Emma(rows[0]);
  }

};
