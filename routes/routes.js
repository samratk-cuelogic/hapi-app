//company.routes.js
 var employee1 = require('../models/employee');
  
var employeeCntrl = require('../controllers/employeeController');
/* GET home page. */
    

module.exports = [ 
    {
       path: '/filter/{param1*2}/{param2}',
       method: ['GET','POST'],
       handler: employeeCntrl.pathparam
    },
    {
       path: '/json',
       method: 'GET',
       handler: employeeCntrl.json
   },
   {
       path: '/',
       method: 'GET',
       handler: employeeCntrl.index
   },
   {
       path: '/edit/{id}',
       method: 'GET',
       handler: employeeCntrl.edit
   },
   {
       path: '/delete/{id}',
       method: 'GET',
       handler: employeeCntrl.update
   },
   {
       path: '/update/{id}',
       method: 'GET',
       handler: employeeCntrl.delete
   },
   {
       path: '/employee',
       method: 'GET',
       handler: employeeCntrl.employee
   }
   
];