require('dotenv').config();
const {assert} = require('chai');
const db = require('../app/models/db');

describe('connecteur SQL', () => {

  it('le connecteur fonctionne correctement', async () => {
    const result = await db.query('SELECT 1 one;');
    assert(result.rows[0].one === 1);
  });

  it('le connecteur gere bien la conversion en json', async () => {
    const json = await db.query('SELECT $1 "value";', [{a:1, b:2}]);
    const values = JSON.parse(json.rows[0].value);

    assert(values.a === 1 && values.b === 2);

    const subValue = await db.query(`SELECT $1::json->'a' "value";`, [{a:3, b:4}]);

    assert(subValue.rows[0].value === 3);
  })

});

const Teacher = require("../app/models/Teacher");

describe("modèles Teacher", () => {

  let newTeacherId;

  describe("inscription d'un Teacher", () => {

    it("l'inscription d'un Teacher fonctionne", async () => {
      const newTeacher = new Teacher();

      newTeacher.first_name = "George";
      newTeacher.last_name = "Sand";
      newTeacher.birth_date = "19-11-1985";
      newTeacher.password = "password";
      newTeacher.email = "george@gmail.com";

      await newTeacher.save();

      assert(!!newTeacher.id);

      newTeacherId = newTeacher.id;
    })

    it("l'inscription d'un Teacher ne fonctionne que si toutes les données sont fournies", async () => {

      const cerror = console.error;

      console.error = _ => {};

      const newTeacher = new Teacher();
      newTeacher.email = "mauvais email";
      await newTeacher.save();

      assert(!newTeacher.id);

      console.error = cerror.bind(console);
    })

  });

  describe('recuperation des teachers', () => {
    it('le teacher ajouté figure dans la collection', async () => {
      const allTeacher = await Teacher.findAll();

      assert(allTeacher.filter(teacher => teacher.id === newTeacherId).length === 1);

    })
  });

  describe("suppression d'un teacher", () => {
    it('le Teacher est correctement supprimé', async () => {

      const tuTeacher = await Teacher.findOne(newTeacherId);

      await tuTeacher.delete();

      const allTeacher = await Teacher.findAll();

      assert(allTeacher.filter(teacher => teacher.id === newTeacherId).length === 0);

    })
  });
});

const Student = require('../app/models/student');

describe("modèles Student", () => {

  let newStudentId;

  describe("inscription d'un Student", () => {

    it("l'inscription d'un Student fonctionne", async () => {
      const newStudent = new Student();

      newStudent.first_name = "Maya";
      newStudent.last_name = "Candille";
      newStudent.password = "password";
      newStudent.email = "gaelle.candille@gmail.com";

      await newStudent.save();

      assert(!!newStudent.id);

      newStudentId = newStudent.id;
    })

    it("l'inscription d'un Student ne fonctionne que si toutes les données sont fournies", async () => {

      const cerror = console.error;

      console.error = _ => {};

      const newStudent = new Student();
      newStudent.email = "mauvais email";
      await newStudent.save();

      assert(!newStudent.id);

      console.error = cerror.bind(console);
    })

  });

  describe('recuperation des students', () => {
    it('le student ajouté figure dans la collection', async () => {
      const allStudent = await Student.findAll();

      assert(allStudent.filter(student => student.id === newStudentId).length === 1);

    })
  });

  describe("suppression d'un student", () => {
    it('le Student est correctement supprimé', async () => {

      const tuStudent = await Student.findOne(newStudentId);

      await tuStudent.delete();

      const allStudent = await Student.findAll();

      assert(allStudent.filter(student => student.id === newStudentId).length === 0);

    })
  });
});

const Class = require('../app/models/Class');

describe("modèles Class", () => {

  let newClassId;

  describe("création d'une classe", () => {

    it("la création d'une classe fonctionne", async () => {
      const newClass = new Class();

      newClass.code = "Ma classe de test Unitaire";

      await newClass.save();

      assert(!!newClass.id);

      newClassId = newClass.id;
    })

  });

  describe('recuperation des classes', () => {
    it('la classe figure dans la collection', async () => {

      const allClass = await Class.findAll();

      assert(allClass.filter(classe => classe.id === newClassId).length === 1);

    })
  });

  describe("suppression d'une classe", () => {
    it('la Classe est correctement supprimé', async () => {

      const tuClass = await Class.findOne(newClassId);

      await tuClass.delete();

      const allClass = await Class.findAll();

      assert(allClass.filter(classe => classe.id === newClassId).length === 0);

    })
  });
});

// const Associate = require('../app/models/Associate');

// describe("modèles Associate", () => {

//   let newAssociateId;
//   let newTeacherId;
//   let newClassId;

//   describe("création d'une Association entre un teacher et une classe", () => {

//     it("la création d'une Association fonctionne", async () => {

//       const newClass = new Class();

//       newClass.code = "Ma classe de test Unitaire";

//       await newClass.save();

//       newClassId = newClass.id;

//       const newTeacher = new Teacher();

//       newTeacher.first_name = "George";
//       newTeacher.last_name = "Sand";
//       newTeacher.birth_date = "19-11-1985";
//       newTeacher.password = "password";
//       newTeacher.email = "george@gmail.com";

//       await newTeacher.save();

//       newTeacherId = newTeacher.id;

//       const newAssociate = new Associate();

//       newAssociate.teacher_id = newTeacherId;
//       newAssociate.class_id = newClassId;

//       await newAssociate.newAssociate();

//       assert(!!newAssociate.id);

//       newAssociateId = newAssociate.id;
     
//     })

//   });

  // describe('récuperation des Association', () => {
  //   it("l'association figure dans la collection", async () => {

  //     const allAssociates = await Associate.allAssociate();

  //     assert(allAssociates.filter(associate => associate.id === newAssociateId).length === 1);

  //   })
  // });

  // describe("suppression d'une association", () => {
  //   it("l'association est correctement supprimé", async () => {

  //     const tuTeacher = await Teacher.findOne(newTeacherId);

  //     const tuClass = await Class.findOne(newClassId);

  //     await tuTeacher.delete();

  //     await tuClass.delete();

  //     const allAssociate = await Associate.findAll();

  //     assert(allAssociate.filter(associate => associate.id === newAssociateId).length === 0);

    // })
  // });
// });