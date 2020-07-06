const db = require('./db');


module.exports = class Login {

  static async byEmail(role, email) {

    const user = await db.query(`SELECT * FROM ${role} WHERE ${role}.email = $1;`, [email]);

    const obj = new Login();
      for (let prop in user.rows[0]) {
        obj[prop] = user.rows[0][prop];
      }
      
      obj.role = role;

      return obj;

  }
/*
  static async studentByEmail(email) {
    const result = await db.query('SELECT * FROM student WHERE email = $1;', [email]);
  
    const obj = new Login();
    for (let prop in result.rows[0]) {
      obj[prop] = result.rows[0][prop];
    }
    
    obj.role = "student";
    obj.isLogged = true;
    
    console.log(obj, this);

    return obj;
  }

  static async teacherByEmail(email) {
    const result = await db.query('SELECT * FROM teacher WHERE email = $1;', [email]);
  
    const obj = new Login();
    for (let prop in result.rows[0]) {
        obj[prop] = result.rows[0][prop];
    }

    obj.role = "teacher";
    obj.isLogged = true;

    console.log(obj);
    
    return obj;
  }
*/
  
}