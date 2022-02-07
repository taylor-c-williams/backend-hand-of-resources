const pool = require('../utils/pool');

module.exports = class Melaniec {
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
      'INSERT INTO melaniec (name, stagename, birthdate) VALUES ($1, $2,$3) RETURNING *',
      [name, stagename, birthdate]
    );
    return new Melaniec(rows[0]);
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM melaniec');
    return rows.map((row) => new Melaniec(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM melaniec WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Melaniec(rows[0]);
  }

  
};
