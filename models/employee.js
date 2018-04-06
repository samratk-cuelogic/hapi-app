
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employee_Schema = new Schema({ 
    firstName: { type: String, required: true},
    lastName : { type: String, required: true},
    address  : { type: String, required: true},
    country  : { type: String, required: true},
    phone    : { type: String, required: true},
    department  : { type: String, required: true} 
});

//var employee = mongoose.model('employee', employee_Schema);

//module.exports.employee = employee;

module.exports = mongoose.model('employee', employee_Schema);

  

