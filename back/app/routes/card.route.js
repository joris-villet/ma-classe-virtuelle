const Card = require('../models/Card');


module.exports = {
  name: "Plugin Card",
  register: server => {
    
    /*--------------------------
            GET ALL CARD
    ---------------------------*/
    server.route({
      method: 'GET',
      path: '/card',
      config: {
        description: 'fetches all card',
        tags: ['api', 'v1', 'card'],
      },
      handler: _ => Card.findAll()
    });

    /*----------------------------
             GET ONE CARD
    ------------------------------*/
    server.route({
      method: 'GET',
      path: '/card/{id}',
      config: {
        description: 'fetches card by its id',
        tags: ['api', 'v1', 'card'],
      },
      handler: async request => {

        const id = request.params.id

        return await Card.findOne(id);
      }
    });

    /*--------------------------------
         GET ALL CARD FROM ONE LIST
    ---------------------------------*/
    server.route({
      method: 'GET',
      path: '/card/list/{id}',
      config: {
        description: 'fetches card by list id',
        tags: ['api', 'v1', 'card'],
      },
      handler: async request => {

        return await Card.findAllByList(request.params.id)
      }
    });

    /*--------------------------------
         GET ALL CARD FROM ONE CLASS
    ---------------------------------*/
    server.route({
      method: 'GET',
      path: '/card/class/{id}',
      config: {
        description: 'fetches card by class id',
        tags: ['api', 'v1', 'card'],
      },
      handler: async request => {

        return await Card.findAllByClass(request.params.id)
      }
    });
    
    /* ------------------------------------
      CREATE ONE CARD METHOD POST
    -------------------------------------*/
    server.route({
      method: 'POST',
      path: '/card',
      config: {
        description: 'Adds card providing all its data',
        tags: ['api', 'v1', 'card'],
      },
      handler: async request => {

        const newCard = new Card();

        for (let prop in request.payload) {
          newCard[prop] = request.payload[prop];
        }
      
        await newCard.save();

        const newCardWithLabel = await Card.cardWithLabel(newCard.id)
      
        return newCardWithLabel;
      }
      
    });

     
      /* ------------------------------------
      UPDATE ONE CARD METHOD PUT
    -------------------------------------*/
    server.route({
      method: 'PUT',
      path: '/card/{id}',
      config: {
        description: 'edits a card with new data',
        tags: ['api', 'v1', 'card'],
      },
      handler: async request => {
        const existingCard = await Card.findOne(request.params.id);

        console.log("je suis passé dans le put");
        
        for (let prop in request.payload) {
          existingCard[prop] = request.payload[prop];
        }

        await existingCard.save();

        console.log(existingCard);
        
        const existingCardWithLabel = await Card.cardWithLabel(existingCard.id)
      
        return existingCardWithLabel;
    }
    });

    /* ------------------------------------
      DELETE ONE CARD METHOD DELETE
    -------------------------------------*/
    server.route({
      method: 'DELETE',
      path: '/card/{id}',
      config: {
        description: 'Delete a card',
        tags: ['api', 'v1', 'card'],
      },
      handler: async (request, h) => {

        console.log("je suis dans le delete", request.params.id);
        
        const card = new Card();
        card.id = request.params.id;
  
          if (await card.delete()) {
              return h.response('Carte supprimé').code(200);
          } else {
              return h.response('Une erreur est survenue').code(404);
          }
        }
      });

  }
}