const db = require('./db');


module.exports = class Student {
  
  
  
  // Method READ student
  static async findAll() {
    const result = await db.query('SELECT * FROM student;');

    return result.rows;
  }

  // Method READ one student
  static async findOne(id) {
    const result = await db.query('SELECT * FROM student WHERE id = $1;',[id]);

   
    const obj = new Student();
    for (let prop in result.rows[0]) {
        obj[prop] = result.rows[0][prop];
    }
  
    return obj;
    
  }

  // Method READ student class Id
  static async findAllByClass(cid) {
    const result = await db.query('SELECT first_name, last_name FROM student WHERE class_id = $1;',[cid]);

    return result.rows;
    
  }

  // Method READ student by teacher Id
  static async findAllByTeacher(tid) {
    const result = await db.query('SELECT class_id, json_agg(student.*) students FROM student WHERE class_id IN (SELECT class_id FROM teacher_has_class WHERE teacher_id = $1) GROUP BY class_id;',[tid]);

    return result.rows;
    
  }

  // Method get for count student by CLASS id
  static async countStudentByClass(cid) {
    const result = await db.query('SELECT class_id, count(*) FROM student WHERE student.class_id = $1 GROUP BY class_id;',[cid]);

   console.log(result.rows);
   
    return result.rows;
    
  }

  // Method get for count student by teacher id
  static async countStudentByTeacher(tid) {
    const result = await db.query('SELECT class_id, count(*) FROM student WHERE class_id IN (SELECT class_id FROM teacher_has_class WHERE teacher_id = $1) GROUP BY class_id ORDER BY class_id;',[tid]);

   console.log(result.rows);
   
    return result.rows;
    
  }


  // Method DELETE student
  async delete() {
    await db.query('DELETE FROM student WHERE id = ($1);', [this.id]);
  
    return true;
  }

  async save() {

    if (this.id) {
      // Method UPDATE ONE student
      const result = await db.query('SELECT * FROM edit_student($1::json);', [this]);

  } else {
      // Method CREATE ONE student
      const result = await db.query('SELECT * FROM new_student($1::json);', [this]);

      this.id = result.rows[0].id;
      
      }
  }


}