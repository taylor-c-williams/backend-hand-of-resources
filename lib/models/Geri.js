const pool = require('../utils/pool');

module.exports = class Geri {
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
      'INSERT INTO geri (name, stagename, birthdate) VALUES ($1, $2,$3) RETURNING *',
      [name, stagename, birthdate]
    );
    return new Geri(rows[0]);
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM geri');
    return rows.map((row) => new Geri(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM geri WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Geri(rows[0]);
  }

};
