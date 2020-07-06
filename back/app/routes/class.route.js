const Class = require('../models/Class')
const Joi = require('@hapi/joi');
const Associate = require('../models/Associate');
const Student = require('../models/student');
const List = require('../models/list');

module.exports = {
  name: "Class plugin",
  register: server => {

    /* ------------------------------------
      FIND ALL CLASS METHOD GET
    -------------------------------------*/
    server.route({
      method: 'GET',
      path: '/class',
      config: {
        description: 'fetches all class',
        tags: ['api', 'v1', 'class'],
      },
      handler: Class.findAll
      
    });

    /* ------------------------------------
      FIND ONE CLASS METHOD GET
    -------------------------------------*/
    server.route({
      method: 'GET',
      path: '/class/{id}',
      config: {
        description: 'fetches one class by its id',
        tags: ['api', 'v1', 'class'],
      },
      handler: async request => {

        return await Class.findOne(request.params.id)
      }
    });

    /* ------------------------------------
      FIND ONE CLASS METHOD GET
    -------------------------------------*/
    server.route({
      method: 'GET',
      path: '/class/teacher/{id}',
      config: {
        description: 'fetches a class by teacher id',
        tags: ['api', 'v1', 'class'],
      },
      handler: async request => {

        return await Class.findByTeacher(request.params.id)
      }
    });

    /* ------------------------------------
    FIND COUNT STUDENT BY CLASS METHOD GET
    -------------------------------------*/
    server.route({
      method: 'GET',
      path: '/class/info/{classid}',
      config: {
        description: 'fetches count and info student by class',
        tags: ['api', 'v1', 'class'],
      },
      handler: async request => {

        console.log(request.params.classid);

        const class_id = request.params.classid;

        let count = await Student.countStudentByClass(class_id);

        if(!count[0]){

          count = [{class_id: 0, count: "0"}];
          
        }

        const students = await Student.findAllByClass(class_id);

        

        return {count, students}
      }
      
    });

     /* ------------------------------------
      CREATE ONE CLASS METHOD POST
    -------------------------------------*/
    server.route({
      method: 'POST',
      path: '/class',
      handler: async request => {

        
        
        const newClass = new Class();
        
        newClass.code = request.payload.code;
        
        await newClass.save();
        
      
        console.log("idclass", newClass.id);
        console.log("idteacher", request.payload.teacherid);
        
        const newAssociate = new Associate();

        newAssociate.class_id = newClass.id;
        newAssociate.teacher_id = request.payload.teacherid;

        console.log("associate", newAssociate);
        
        await newAssociate.associateTeacher();

        const listsAndCards = await List.listAndCardByTeacher(newAssociate.teacher_id)

        return listsAndCards;
      },
      options: {
        description: 'Adds class providing all its data',
        tags: ['api', 'v1', 'class'],
        validate: {
          payload: Joi.object({
            code: Joi.string().min(2).required(),
            teacherid: Joi.number().integer(),
            access_token: [Joi.string(), Joi.number()]
          })
        }
      }
    });

    /* ------------------------------------
      UPDATE ONE CLASS METHOD PUT
    -------------------------------------*/
    server.route({
      method: 'PUT',
      path: '/class/{id}',
      config: {
        description: 'edits a class with new data',
        tags: ['api', 'v1', 'class'],
      },
      handler: async request => {
        const existingClass = await Class.findOne(request.params.id);

        for (let prop in request.payload) {
          existingClass[prop] = request.payload[prop];
        }

        await existingClass.save();

        return existingClass;
      }
    });

    /* ------------------------------------
      DELETE ONE CLASS METHOD DELETE
    -------------------------------------*/
    server.route({
      method: 'DELETE',
      path: '/class/{cid}/teacher/{tid}',
      config: {
        description: 'Delete associate class for one teacher by class id ans teacher id ',
        tags: ['api', 'v1', 'class'],
      },
      handler: async (request, h) => {

        const classroom = new Class();
        
        classroom.id = request.params.cid;

        const associate = new Associate();

        associate.class_id = request.params.cid;
        associate.teacher_id = request.params.tid;

        await associate.deleteAssociateTeacher();

        if (await classroom.delete()) {

          return h.response('Classe supprimée').code(200);

        } else {
            return h.response('Une erreur est survenue').code(404);
        }
      }
    });


  }
}