const db = require('./db');

module.exports = class Class{

  // Method READ CLASS
  static async findAll() {
    const result = await db.query('SELECT * FROM class;');

    return result.rows;
  }

  // Method READ ONE CLASS
  static async findOne(id) {
    const result = await db.query('SELECT * FROM class WHERE id = $1;',[id]);

   
    const obj = new Class();
    for (let prop in result.rows[0]) {
        obj[prop] = result.rows[0][prop];
    }
  
    return obj;
    
  }


  // Method READ CLASS by Teacher id
  static async findByTeacher(id) {
    const result = await db.query('SELECT * FROM teacher_has_class WHERE teacher_id = $1;',[id]);

   
    return result.rows;
    
  }

  async save() {

    if (this.id) {
      // Method UPDATE ONE CLASS
      const result = await db.query('SELECT * FROM edit_class($1::json);', [this]);

  } else {
      // Method CREATE ONE CLASS
      const result = await db.query('SELECT * FROM new_class($1::json);', [this]);

      this.id = result.rows[0].id;
      
      }
  }

  // Method DELETE ONE CLASS
  async delete() {
  await db.query('DELETE FROM class WHERE id = ($1);', [this.id]);

  return true;
  }



}