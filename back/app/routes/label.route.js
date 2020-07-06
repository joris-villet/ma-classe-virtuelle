const Label = require('../models/Label')
const Joi = require('@hapi/joi');


module.exports = {
  name: "Label plugin",
  register: server => {

    /* ------------------------------------
      FIND ALL LABEL METHOD GET
    -------------------------------------*/
    server.route({
      method: 'GET',
      path: '/label',
      config: {
        description: 'Fetches all label',
        tags: ['api', 'v1', 'label'],
      },
      handler: Label.findAll
      
    });

    /* ------------------------------------
      FIND ONE LABEL METHOD GET
    -------------------------------------*/
    server.route({
      method: 'GET',
      path: '/label/{id}',
      config: {
        description: 'Fetches one label by its id',
        tags: ['api', 'v1', 'label'],
      },
      handler: async request => {

        return await Label.findOne(request.params.id)
      }
    });

     /* ------------------------------------
      CREATE ON LABEL METHOD POST
    -------------------------------------*/
    server.route({
      method: 'POST',
      path: '/label',
      handler: async request => {

        const newLabel = new Label();

        newLabel.title = request.payload.title;
        newLabel.color = request.payload.color;
        
        await newLabel.save();
      
        return newLabel;
      },
      options: {
        description: 'Adds label providing all its data',
        tags: ['api', 'v1', 'label'],
        validate: {
          payload: Joi.object({
            title: Joi.string().alphanum().required(),
            color: Joi.string().alphanum().required(),
            access_token: [Joi.string(), Joi.number()],
          })
        }
      }
    });

    /* ------------------------------------
      UPDATE ONE LABEL METHOD PUT
    -------------------------------------*/
    server.route({
      method: 'PUT',
      path: '/label/{id}',
      config: {
        description: 'edits a label with new data',
        tags: ['api', 'v1', 'label'],
      },
      handler: async request => {
        const existingLabel = await Label.findOne(request.params.id);

        for (let prop in request.payload) {
          existingLabel[prop] = request.payload[prop];
        }

        await existingLabel.save();

        return existingLabel;
      }
    });

    /* ------------------------------------
      DELETE ONE LABEL METHOD DELETE
    -------------------------------------*/
    server.route({
      method: 'DELETE',
      path: '/label/{id}',
      config: {
        description: 'delete a label',
        tags: ['api', 'v1', 'label'],
      },
      handler: async (request, h) => {

        const label = new Label();
        label.id = request.params.id;
  
          if (await label.delete()) {
              return h.response('Label supprimé').code(200);
          } else {
              return h.response('Une erreur est survenue').code(404);
          }
        }
      });


  }
}