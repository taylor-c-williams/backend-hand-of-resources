const pool = require('../utils/pool');

module.exports = class Melb {
  id;
  name;
  stagename;
  birthdate;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.stagename = row.stagename;
    this.birthdate = row.birthdate;
  }

  static async insert({ name, stagename, birthdate }) {
    const { rows } = await pool.query(
      'INSERT INTO melb (name, stagename, birthdate) VALUES ($1,$2,$3) RETURNING *',
      [name, stagename, birthdate]
    );
    return new Melb(rows[0]);
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM melb');
    return rows.map((row) => new Melb(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM melb WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Melb(rows[0]);
  }

  static async update(id, attributes) {
    const existingMelb = await Melb.getById(id);
    const name = attributes.name ?? existingMelb.name;
    const stagename = attributes.stagename ?? existingMelb.stagename;
    const birthdate = attributes.birthdate ?? existingMelb.birthdate;
    
    const { rows } = await pool.query('UPDATE melb SET name=$1, stagename=$2, birthdate=$3 WHERE id=$4 RETURNING *', [name, stagename, birthdate, id]);
    
    if (!rows[0]) {        
      const error = new Error(`Order ${id} not found`);
      error.status = 404;
      throw error;
    } 
    return new Melb(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM melb WHERE id=$1 RETURNING *;',
      [id]
    );
    if (!rows[0]) return null;
    return new Melb(rows[0]);
  }

};
