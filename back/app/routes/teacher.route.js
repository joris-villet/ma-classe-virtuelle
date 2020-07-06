const Teacher = require('../models/Teacher')
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

module.exports = {
  name: "teacher page",
  register: server => {

     /* ------------------------------------
        REGISTER MODAL TEACHER METHOD GET 
    -------------------------------------*/
    server.route({
      method: 'GET',
      path: '/signup',
      handler: _ => "register page connected"
    });

    /* ------------------------------------
        REGISTER TEACHER METHOD POST
    -------------------------------------*/
    server.route({
      method: 'POST',
      path: '/signup',
      handler: async (request, h) => {

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

        const newTeacher = new Teacher();

        newTeacher.first_name = request.payload.firstName;
        newTeacher.last_name = request.payload.lastName;
        newTeacher.birth_date = request.payload.birthDate;
        newTeacher.password = request.payload.password;
        newTeacher.email = request.payload.email;


        const existingTeacher = await Teacher.findOneByMail(newTeacher.email);

        console.log("existant", existingTeacher);

        if(newTeacher.email === existingTeacher.email){
          
          return "un compte existe deja avec cette Email"
          
        } else {
        

          console.log(newTeacher);

          // MAIL OPTIONS WITH REQUEST PAYLOAD AND SEND PASSWORD IN CLEAR
          let mailOptions = ({
            from: process.env.EMAIL, // sender address
              to: `${newTeacher.email}`, // list of receivers
              subject: "Ma classe virtuelle ✔", // Subject line
              html:  `
                      <h1>Bonjour ${newTeacher.first_name}</h1>
                      <p>Voici ton login et ton mot de passe, nous te souhaitons la bienvenue</p>
                      <strong><p>Login: ${newTeacher.email}</p></strong>
                      <strong><p>Mot de passe: ${newTeacher.password}</p></strong>
                    `, // Template html 
          });

          const passwordH = bcrypt.hashSync(request.payload.password, 10);

          newTeacher.password = passwordH;
          await newTeacher.save();
          
          // L'envoie du mail
          transporter.sendMail(mailOptions, function(error, response){
            if(error){
              console.log("Erreur lors de l'envoie du mail!");
              console.log(error);
            }else{
              console.log("Mail envoyé avec succès!")
            }
          });
        
          return newTeacher;
        }
      },
     
      options: {
          auth: false,
          description: 'register teacher',
          tags: ['api', 'v1', 'teacher'],
          validate: {
            payload: Joi.object({
              firstName: Joi.string().min(2).max(30).required(),
              lastName: Joi.string().min(2).max(30).required(),
              password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/),
              access_token: [Joi.string(), Joi.number()],
              birthDate: Joi.date(),
              email: Joi.string().email()
            }).with('firstName', 'birthDate')
          }
        }
      
    });

    server.route({
      method: 'PUT',
      path: '/teacher/{id}',
      config: {
        description: 'Update a teacher by its id',
        tags: ['api', 'v1', 'teacher'],
      },
      handler: async request => {
        const existingTeacher = await Teacher.findOne(request.params.id);

        for (let prop in request.payload) {
            existingTeacher[prop] = request.payload[prop];
        }

        const passwordH = bcrypt.hashSync(existingTeacher.password, 10);
        console.log(passwordH)
        existingTeacher.password = passwordH;

        console.log(existingTeacher)

        await existingTeacher.save();

        return existingTeacher;
    }
    });

       /* ------------------------------------
          FINDALL TEACHERS METHOD GET
    -------------------------------------*/
    server.route({
      method: 'GET',
      path: '/teacher',
      config: {
        description: 'fetches all teacher',
        tags: ['api', 'v1', 'teacher'],
      },
      handler: _ => Teacher.findAll()
    });

    /* ------------------------------------
          FINDONE TEACHERS METHOD GET
    -------------------------------------*/
    server.route({
    method: 'GET',
    path: '/teacher/{id}',
    config: {
      description: 'fetches one teacher by its id',
      tags: ['api', 'v1', 'teacher'],
    },
    handler: async request => {
      
      const id = request.params.id

      return await Teacher.findOne(id);
    } 
    });

   /* ------------------------------------
      DELETE ONE TEACHER METHOD DELETE
    -------------------------------------*/
   server.route({
    method: 'DELETE',
    path: '/teacher/{id}',
    config: {
      description: 'delete a teacher',
      tags: ['api', 'v1', 'teacher'],
    },
    handler: async (request, h) => {
      const teacher = new Teacher();
        teacher.id = request.params.id;

        if (await teacher.delete()) {

            return h.response('Professeur supprimé').code(200);
        } else {
            return h.response('Une erreur est survenue').code(404);
        }
      }
    });

  }
}