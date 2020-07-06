const db = require('./db');

module.exports = class Label{

  // Method READ LABEL
  static async findAll() {
    const result = await db.query('SELECT * FROM label;');

    return result.rows;
  }

  // Method READ ONE LABEL
  static async findOne(id) {
    const result = await db.query('SELECT * FROM label WHERE id = $1;',[id]);

   
    const obj = new Label();
    for (let prop in result.rows[0]) {
        obj[prop] = result.rows[0][prop];
    }
  
    return obj;
    
  }

  async save() {

    if (this.id) {
      // Method UPDATE ONE LABEL
      const result = await db.query('SELECT * FROM edit_label($1::json);', [this]);

  } else {
      // Method CREATE ONE LABEL
      const result = await db.query('SELECT * FROM new_label($1::json);', [this]);

      this.id = result.rows[0].id;
      
      }
  }

  // Method DELETE ONE LABEL
  async delete() {
  await db.query('DELETE FROM label WHERE id = ($1);', [this.id]);

  return true;
}


}