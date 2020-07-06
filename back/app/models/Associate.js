const db = require('./db');

module.exports = class Associate {

  // Method add CLASS with teacher
  async associateTeacher() {

    await db.query('INSERT INTO teacher_has_class (class_id, teacher_id) VALUES ($1, $2);', [this.class_id, this.teacher_id]);
    
  }

  // Method delete CLASS with teacher
  
  async deleteAssociateTeacher() {

    await db.query('DELETE FROM teacher_has_class WHERE class_id = $1 AND teacher_id= $2;', [this.class_id, this.teacher_id]);
    
  }



}
