const db = require('./db');

module.exports = class List {
  
  // Method READ ALL LIST
  static async findAll() {
    const result = await db.query('SELECT * FROM list;');

    return result.rows;
  }

  // Method READ ONE LIST
  static async findOne(id) {
  const result = await db.query('SELECT * FROM list WHERE id = $1;', [id]);

  const obj = new List();
  for (let prop in result.rows[0]) {
      obj[prop] = result.rows[0][prop];
  }

  return obj;
  }

  // Method READ current week LIST
  static async findCurrent() {
    const result = await db.query('SELECT * FROM v_current_week;');

    return result.rows;
    
  }

  // Method READ current LIST and CARD by class
  static async listAndCardByClass(classid) {
    console.log(classid);
    
    const result = await db.query('SELECT * FROM list_card_label_by_class($1) tmp(list_id int, list_title timestamptz, all_card json, week int);', [classid]);
    
    return result.rows;
    
  }

   // Method READ current LIST and CARD by teacher
   static async listAndCardByTeacher(tid) {
    console.log(tid);
    
    const result = await db.query('SELECT * FROM list_card_label_by_teacher($1) tmp(class_title text, class_id int, teacher_id int, list_id int, list_title timestamptz, all_card json, week int);', [tid]);
    
    return result.rows;
    
  } 

  // Method READ LIST and CARD by teacher, class and week
  static async listAndCardByTeacherWeekAndClass(week, classid, tid) {
    
    
    const result = await db.query('SELECT * FROM list_by_week_by_teacher($1, $2, $3) tmp(class_title text, class_id int, teacher_id int, list_id int, list_title timestamptz, all_card json, week int);', [week, classid, tid]);
    
    return result.rows;
    
  }

  // Method READ LIST and CARD by student class and week
  static async listAndCardByStudentWeekAndClass(week, classid, studid) {
   
    
    const result = await db.query('SELECT * FROM list_by_week_by_student($1, $2, $3) tmp(class_title text, class_id int, student_id int, list_id int, list_title timestamptz, all_card json, week int);', [week, classid, studid]);
    
    return result.rows;
    
  } 

 // Method READ current LIST and CARD by student
 static async listAndCardByStudent(studid) {
  console.log(studid);
  
  const result = await db.query('SELECT * FROM list_card_label_by_student($1) tmp(class_title text, class_id int, student_id int, list_id int, list_title timestamptz, all_card json, week int);', [studid]);
  
  return result.rows;
  
}

static async findCurrentWeek() {

  const result = await db.query("SELECT date_part('week', current_date);");

  return result.rows[0].date_part;

}
  
}