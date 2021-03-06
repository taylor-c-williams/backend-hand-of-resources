const pool = require('../utils/pool');

module.exports = class Victoria {
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
      'INSERT INTO victoria (name, stagename, birthdate) VALUES ($1, $2,$3) RETURNING *',
      [name, stagename, birthdate]
    );
    return new Victoria(rows[0]);
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM victoria');
    return rows.map((row) => new Victoria(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM victoria WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Victoria(rows[0]);
  }

  static async update(id, attributes) {
    const existingVictoria = await Victoria.getById(id);
    const name = attributes.name ?? existingVictoria.name;
    const stagename = attributes.stagename ?? existingVictoria.stagename;
    const birthdate = attributes.birthdate ?? existingVictoria.birthdate;

    const { rows } = await pool.query('UPDATE victoria SET name=$1, stagename=$2, birthdate=$3 WHERE id=$4 RETURNING *', [name, stagename, birthdate, id]);

    if(!rows[0]){
      const error = new Error(`Victoria number ${id} not found`);
      error.status = 404;
      throw error;
    }
    return new Victoria(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM victoria WHERE id=$1 RETURNING *', [id]
    );
    if(!rows[0]) return null;
    return new Victoria(rows[0]);
  }


};
