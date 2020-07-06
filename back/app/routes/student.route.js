const Student = require("../models/student");
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const generatePassword = require("password-generator");

module.exports = {
  name: "student plugin",
  register: server => {

    /* ------------------------------------
      FIND ALL STUDENT METHOD GET
    -------------------------------------*/
    server.route({
      method: 'GET',
      path: '/student',
      config: {
        description: 'fetches all student',
        tags: ['api', 'v1', 'student'],
      },
      handler: Student.findAll
      
    });

    /* ------------------------------------
      FIND ONE STUDENT METHOD GET
    -------------------------------------*/
    server.route({
      method: 'GET',
      path: '/student/{id}',
      config: {
        description: 'fetches one student by its id',
        tags: ['api', 'v1', 'student'],
      },
      handler: async request => {

        return await Student.findOne(request.params.id)
      }
    });

    /* ------------------------------------
      FIND STUDENTS BY CLASS METHOD GET
    -------------------------------------*/
    server.route({
      method: 'GET',
      path: '/student/teacher/{id}',
      config: {
        description: 'fetches all student by teacher grouping by class_id',
        tags: ['api', 'v1', 'student'],
      },
      handler: async request => {
       
        const students = await Student.findAllByTeacher(request.params.id);

        const counts = await Student.countStudentByTeacher(request.params.id);
        

        return {counts, students}
      }
    });

    /* ------------------------------------
      CREATE ONE STUDENT METHOD POST
    -------------------------------------*/
    server.route({
      method: 'POST',
      path: '/student',
      handler: async request => {

        console.log(request.payload);
        // Création du transporteur
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL, // email à mettre dans dotenv
            pass: process.env.EMAILPASSWORD, // password à mettre dans dotenv
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        const password = generatePassword(8, false, /\d/)

        const newStudent = new Student();

        newStudent.first_name = request.payload.firstName;
        newStudent.last_name = request.payload.lastName;
        newStudent.password = password;
        newStudent.email = request.payload.email;
        newStudent.class_id = request.payload.classId;

        console.log(newStudent);
        
        
         // MAIL OPTIONS WITH REQUEST PAYLOAD AND SEND PASSWORD IN CLEAR
         let mailOptions = ({
          from: process.env.EMAIL, // sender address
            to: `${newStudent.email}`, // list of receivers
            subject: "Ma classe virtuelle ✔", // Subject line
            html:  `
                    <h1>Bonjour ${newStudent.first_name}</h1>
                    <p>Voici ton login et ton mot de passe, nous te souhaitons la bienvenue</p>
                    <strong><p>Login: ${newStudent.email}</p></strong>
                    <strong><p>Mot de passe: ${newStudent.password}</p></strong>
                  `, // Template html 
        });

        
        
        const passwordH = bcrypt.hashSync(password, 10);
        
        newStudent.password = passwordH;
        await newStudent.save();
      
        newStudent.role = 'student';

        // L'envoie du mail
        transporter.sendMail(mailOptions, function(error, response){
        if(error){
          console.log("Erreur lors de l'envoie du mail!");
          console.log(error);
        }else{
          console.log("Mail envoyé avec succès!")
        }
      });

        return newStudent;
      },
      options: {
          description: 'Adds student providing all its data',
          tags: ['api', 'v1', 'student'],
          validate: {
            payload: Joi.object({
              firstName: Joi.string().min(2).max(30).required(),
              lastName: Joi.string().min(2).max(30).required(),
              password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/),
              access_token: [Joi.string(), Joi.number()],
              classId: Joi.number().integer(),
              email: Joi.string().email()
              // { minDomainSegments: 2, tlds: { allow: ["com", "net", "fr", "io"] } } 
            })
          }
        }
    });


    /* ------------------------------------
      UPDATE ONE STUDENT METHOD PUT
    -------------------------------------*/
    server.route({
      method: 'PUT',
      path: '/student/{id}',
      config: {
        description: 'edits a student with new data by this id',
        tags: ['api', 'v1', 'student'],
      },
      handler: async request => {
        const existingStudent = await Student.findOne(request.params.id);

        for (let prop in request.payload) {
          existingStudent[prop] = request.payload[prop];
        }

        const passwordH = bcrypt.hashSync(existingStudent.password, 10);
        console.log(passwordH)
        existingStudent.password = passwordH;

        console.log(existingStudent)

        await existingStudent.save();

        return existingStudent;
    }
    });

    /* ------------------------------------
      DELETE ONE STUDENT METHOD DELETE
    -------------------------------------*/
    server.route({
      method: 'DELETE',
      path: '/student/{id}',
      config: {
        description: 'Delete one student by this id',
        tags: ['api', 'v1', 'student'],
      },
      handler: async (request, h) => {
        const student = new Student();
        student.id = request.params.id;
  
          if (await student.delete()) {
              return h.response('Elève supprimé').code(200);
          } else {
              return h.response('Une erreur est survenue').code(404);
          }
        }
      });
  
  }
}