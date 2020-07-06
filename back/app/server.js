if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const Login = require('./models/Login');
const Label = require('./models/Label');
const List = require('./models/list');

const Hapi = require('@hapi/hapi');
const server = Hapi.server({
  port: process.env.PORT || 3000,
  debug: { request: [ 'error' ] }
});


process.on('unhandledRejection', (err) => {
  console.error(err);
});

(async () => {

  await server.register(require('@hapi/cookie'));
 
  await server.auth.strategy('session', 'cookie', {
    cookie: {
      password: '$2y$10$Wi6P8LEgn2rwovy91i6aI.Gpy2jwwKHiaSKwH/NeFNFPconLVvuxO',
      // TRUE BY DEFAULT
      isSecure: false,
      // isSecure: process.env.NODE_ENV !== 'development',
      ttl: 24 * 60 * 60 * 1000,
      isSameSite: false,
      isHttpOnly: true,
    },
    
    validateFunc: async (request, session) => {

      console.log("je suis passé dans la validatefunc");
      
      const {email, role} = session;

      const account = await Login.byEmail(role, email);
      
      if (account.email !== session.email) {
        console.log("je n'arrive pas passer la validatfunc");
        
          return { valid: false };
      }
      console.log("la validatefunc est ok");
  
      return { valid: true, credentials: account};
    }
   });
   
   server.auth.default('session');

  // Module for documentation using swagger
await server.register([
  require('@hapi/inert'),
  require('@hapi/vision'),
    {
      plugin: require('hapi-swagger'),
      options: {
        info: {
          title: 'Ma classe virtuelle documentation',
          version: "1.0"
        }
      }
    }
  ]);

  await server.register({
    plugin: require('hapi-cors'),
    options: {
        origins: ['http://localhost:8080'],
        allowCredentials: 'true',
        exposeHeaders: ['content-type', 'content-length'],
        maxAge: 600,
        methods: ['POST, GET, PUT, DELETE'],
        headers: ['Accept', 'Content-Type', 'Authorization']
    }
  });

  console.log('Sessions fonctionnelles');
  

  await server.register(require('./routes/index.route'));

  await server.register(require('./routes/list.route'));

  await server.register(require('./routes/teacher.route'));

  await server.register(require('./routes/login.route'));

  await server.register(require('./routes/student.route'));
  
  await server.register(require('./routes/card.route'));

  await server.register(require('./routes/class.route'));

  await server.register(require('./routes/label.route'));

  await server.start();
  console.log(`server is running on ${server.info.port}`);
})();