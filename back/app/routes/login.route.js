const Login = require("../models/Login");
const Bcrypt = require('bcrypt');
const List = require("../models/list");
const Label = require("../models/Label");
const Student = require("../models/student");


module.exports = {
  name: "login page",
  register: server => {


    server.route([
      {
        method: 'GET',
        path: '/islogged',
        options: {
          auth: {
            mode: 'try'
          },
          handler: async (request, h) => {
            
            if (request.auth.isAuthenticated) {

              const account = request.auth.credentials;
              
               console.log(account);
               

              //delete account.password;
                
              let listsAndCards = [];
              let count = [];

              if (account.role === 'teacher') {

                listsAndCards = await List.listAndCardByTeacher(account.id);
                
                count = await Student.countStudentByTeacher(account.id);

                if(!count[0]){
                  count = [{class_id: 0, count: "0"}];
                  
                }
                
              } else {

                listsAndCards = await List.listAndCardByStudent(account.id);

                count = await Student.countStudentByClass(account.class_id);

              }

              const week = await List.findCurrentWeek();

              const label = await Label.findAll();
              
              return {done:true, data: {account, week, count, label, listsAndCards}}

            } else {
              return {done: false};
            }
          }
        },
      },
      
      {
        method: 'POST',
        path: '/login',
        options: {
          auth: false,
          handler: async (request, h) => {
          
            const { email, password, role } = request.payload;
            
            const account = await Login.byEmail(role, email);
           
            
            if (!!account.id) {
              const rightPassword = await Bcrypt.compare(password, account.password)

              if (!!rightPassword) {
                
                // TOUT ROULE
                request.cookieAuth.set({id: account.id, email: account.email, role: account.role})
                
                delete account.password;
                
                let listsAndCards = [];
                let count = [];
  
                if (role === 'teacher') {

                  listsAndCards = await List.listAndCardByTeacher(account.id);

                  console.log("account", listsAndCards);

                  count = await Student.countStudentByTeacher(account.id);

                  if(!count[0]){
                    count = [{class_id: 0, count: "0"}];
                    
                  }
                  console.log("count", count);
                  
                } else {

                  listsAndCards = await List.listAndCardByStudent(account.id);

                  count = await Student.countStudentByClass(account.class_id);
                }
                
                const week = await List.findCurrentWeek();

                const label = await Label.findAll();

                return {
                  isLogged: true,
                  week,
                  account,
                  count,
                  label,
                  listsAndCards,
                }
              }
              // MOT DE PASSE INVALIDE
            }
            // NOPE
            return {
              isLogged: false,
              message:  "Email ou password introuvable"
            };
  
          }
  
        },
      },

      {
        method: 'GET',
        path: '/logout',
        options: {
            handler: (request, h) => {
  
                request.cookieAuth.clear();
                return {
               
                  isLogged: false,
                };
            }
        }
      }

    ]);
    
  }
}

