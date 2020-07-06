const db = require('./db');

module.exports = class Teacher {

  // Method READ teachers
  static async findAll() {
    const result = await db.query('SELECT * FROM teacher;');

    return result.rows;
  }

  // Method READ one teacher
  static async findOne(id) {
  const result = await db.query('SELECT * FROM teacher WHERE id = $1;', [id]);

  const obj = new Teacher();
  for (let prop in result.rows[0]) {
      obj[prop] = result.rows[0][prop];
  }

  return obj;
}

 // Method READ one teacher by email
 static async findOneByMail(email) {
  const result = await db.query('SELECT * FROM teacher WHERE email = $1;', [email]);

  const obj = new Teacher();
  for (let prop in result.rows[0]) {
      obj[prop] = result.rows[0][prop];
  }

  return obj;
}

  
    // Method DELETE a teacher
  async delete() {
    await db.query('DELETE FROM teacher WHERE id = ($1);', [this.id]);

    return true;
  }


  async save() {

    if (this.id) {
      // Method UPDATE one teacher
      const result = await db.query('SELECT * FROM edit_teacher($1::json);', [this]);

  } else {
      // Method CREATE one teacher
      const result = await db.query('SELECT * FROM new_teacher($1::json);', [this]);

      this.id = result.rows[0].id;
      
      }
  }

}





 

