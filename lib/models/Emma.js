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

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM emma');
    return rows.map((row) => new Emma(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM emma WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Emma(rows[0]);
  }

  static async update(id, attributes) {
    const existingEmma = await Emma.getById(id);
    const name = attributes.name ?? existingEmma.name;
    const stagename = attributes.stagename ?? existingEmma.stagename;
    const birthdate = attributes.birthdate ?? existingEmma.birthdate;

    const { rows } = await pool.query('UPDATE emma SET name=$1, stagename=$2, birthdate=$3 WHERE id=$4 RETURNING *', [name, stagename, birthdate, id]);

    if(!rows[0]){
      const error = new Error(`Emma number ${id} not found`);
      error.status = 404;
      throw error;
    }
    return new Emma(rows[0]);
  }

};
