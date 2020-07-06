const db = require('./db');

module.exports = class Card {

  // Method READ ALL CARD
  static async findAll() {
    const result = await db.query('SELECT * FROM card;');

    return result.rows;
  }

  // Method READ ONE CARD
  static async findOne(id) {
  const result = await db.query('SELECT * FROM card WHERE id = $1;', [id]);

  const obj = new Card();
  for (let prop in result.rows[0]) {
      obj[prop] = result.rows[0][prop];
  }

  return obj;
  }

  // Method READ card by list_Id
  static async findAllByList(lid) {
    const result = await db.query('SELECT * FROM card WHERE list_id = $1;',[lid]);

    return result.rows;
    
  }

  // Method READ card by class_Id
  static async findAllByClass(cid) {
    const result = await db.query('SELECT * FROM card WHERE class_id = $1;',[cid]);

    return result.rows;
    
  }

   // Method READ card with label by Id
   static async cardWithLabel(cid) {


    const result = await db.query('SELECT * FROM card_with_label($1) tmp(id int, title text, content text, position int, list_id int, label_id int, class_id int, link text, video text, title_label text, color_label text);',[cid]);

    return result.rows[0];
    
  }

  

  async save() {

    if (this.id) {
      // Method UPDATE one card
      const result = await db.query('SELECT * FROM edit_card($1::json);', [this]);

  } else {
      // Method CREATE one card
      const result = await db.query('SELECT * FROM new_card($1::json);', [this]);

      this.id = result.rows[0].id;
      
      }
  }


    // Method DELETE a teacher
  async delete() {
    await db.query('DELETE FROM card WHERE id = ($1);', [this.id]);

    return true;
  }


}