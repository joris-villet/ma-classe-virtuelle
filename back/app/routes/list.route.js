const List = require('../models/list')
module.exports = {
  name: "list",
  register: server => {

    server.route({
      method: 'GET',
      path: '/list',
      config: {
        description: 'Fetches all list',
        tags: ['api', 'v1', 'list'],
      },
      handler: List.findAll
    });

    server.route({
      method: 'GET',
      path: '/list/{id}',
      config: {
        description: 'Fetches one list by its id',
        tags: ['api', 'v1', 'list'],
      },
      handler: async _ => {
        return await List.findOne(request.params.id)
      }
    });

    server.route({
      method: 'GET',
      path: '/list/current',
      config: {
        description: 'Fetches current list this week',
        tags: ['api', 'v1', 'list'],
      },
      handler: List.findCurrent
    });

    server.route({
      method: 'GET',
      path: '/list/class/{id}',
      config: {
        description: 'Fetches the current list with its cards and label by class',
        tags: ['api', 'v1', 'list'],
      },
      handler: async request => {
        console.log(request.params.id);
        
        return await List.listAndCardByClass(request.params.id)
     
      }
    });

    server.route({
      method: 'GET',
      path: '/list/class/{cid}/teacher/{tid}/week/{week}',
      options: {
        auth: false,
        description: 'Fetches list with its cards and label by class id, teacher id and week number',
        tags: ['api', 'v1', 'list']
      },
      handler: async request => {

        const {cid, week, tid} = request.params;

        
        return await List.listAndCardByTeacherWeekAndClass(week, cid, tid)
      }
      
    });

    server.route({
      method: 'GET',
      path: '/list/class/{cid}/student/{studid}/week/{week}',
      options: {
        auth: false,
        description: 'Fetches list with its cards and label by class id, student id and week number',
        tags: ['api', 'v1', 'list']
      },
      handler: async request => {

        const {cid, week, studid} = request.params;

        
        
        return await List.listAndCardByStudentWeekAndClass(week, cid, studid)
     
      }
    });



   
    
  }
}