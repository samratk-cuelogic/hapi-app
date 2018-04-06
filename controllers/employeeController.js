// var express = require('express');
// var mongoose = require('mongoose'); 

const Joi = require('joi')
var employee = require('../models/employee');
module.exports = {
	      
            pathparam(req, reply) {
			         console.log("json Mehtod");		
			       		 
				      var params = req.params ;
				      var query = req.query ;
			          console.log('info', params) ;
			          var payload = req.payload   ;
    
			          return {query:query,params:params ,payload:payload };
			        //  reply(params);
			}
			,
			json(req, reply) {
			         console.log("json Mehtod");		
			       		 
				    return employee.find({}, function(err, employees) {
					        if (err) throw err;   
					        return reply.response(employees);	
					        // return   employees;
					         //return reply.view('index2', employees)
					         
					        return employees;
					     });  
				      
			}
			,
			index(req, reply) {
			         console.log("index Mehtod");		
			       		 
				     var emp= employee.find({}, function(err, employees) {
					        if (err) throw err;   

					      return  employees;
					       // return reply.response(employees);	
					        // return   employees;
					         //return reply.view('index2', employees)
					         
					       // return employees;
					     });  
				     // console.log(emp);
				  
				  // return emp;//reply.response(employees);	
				    var aa='';
				     
				      return   reply.view('index2', {empData:emp,errData:JSON.stringify(aa)})

				      //  return reply.response("employees");
			}
			,
			edit(req, reply) {
			        
			       console.log("edit Mehtod");	
		            return  employee.find({ _id: req.params.id }, function(err, docs) {
				      //  res.render('edit.ejs', { posts: docs[0] });
				          return reply.response("edit");	
				    }); 
			},
			delete(req, reply) {
			        
			       console.log("delete Mehtod");
			       return employee.findByIdAndRemove(req.params.id, function(err) {
				        if (err) throw err;
				        console.log('User deleted!');
				        //res.redirect( '/' ); 
				         return reply.response({msg: `User deleted with id ${req.params.id}`});
				        //return reply.response("delete");	
				    });  
			},
			update(req, reply) {
			        console.log("update Mehtod");	
			        var data = req.body;
				    // console.log("Edit : ");
				    // console.log(data);
				    employee.findByIdAndUpdate(data._id, {
				        firstName: data.firstName,
				        lastName: data.lastName,
				        address: data.address,
				        country: data.country,
				        phone: data.phone,
				        department: data.department
				    }, function(err, savedUser) {
				        if (err) throw err;
				        console.log(" User updated successfully!! ");
				        //return " User updated successfully!! ";
				          return reply.response(savedUser);
				       // res.redirect('http://localhost:3000/');
				       // res.redirect( '/' );
				    });	
			       
			       		 
			},
			employee(req, reply) {
			       console.log("employee Mehtod");	
			       var data = req.body;
				    var newemp1 = employee({
				        firstName: data.firstName,
				        lastName: data.lastName,
				        address: data.address,
				        country: data.country,
				        phone: data.phone,
				        department: data.department
				    });
				    return 'employee';
				    //  newemp1.save(function(err, data) {
				    //     // if (err) throw err;
				    //     if (err) {
				    //         // console.log('ERROR : ' + JSON.stringify(err));
				    //         console.log('ERROR : ' + JSON.stringify(err.errors.firstName.message));
				    //         employee.find({}, function(err1, newempd) {
				    //             res.render('index2.ejs', { empData: JSON.stringify(newempd), errData: err.errors });
				    //         });

				    //     } else {
				    //         console.log('Success  : ' + JSON.stringify(data));
				    //         var errData1 = {};
				    //         employee.find({}, function(err1, newempd) {
				    //             res.render('index2.ejs', { empData: JSON.stringify(newempd), errData: errData1 });
				    //         });
				    //     }

				    // });
			       		 
			} 
	  
};
 



// module.exports = {
//    create(req, reply) {
//        if (!req.payload.name) {
//            return reply({er: 'name is required field'}).code(400);
//        }
//        Company.create({
//            name: req.payload.name,
//            city: req.payload.city,
//            address: req.payload.address
//        }, (err, savedCompany) => {
//            if (err) {
//                return reply(err).code(500);
//            }
//            return reply.response(savedCompany);
//        });
//    },
//    find(req, reply) {

//        Company.find({}, (err, companies) => {
//            if (err) {
//                return reply(err).code(404);
//            }
//            return reply.response(companies);
//        })
//    },
//    findOne(req, reply) {
//        if (!req.params.id) {
//            return reply({err: 'id is required param'}).code(400);
//        }
//        Company.findById(req.params.id, (err, company) => {
//            if (err) {
//                return reply(err).code(404);
//            }
//            return reply.response(company);
//        })
//    },
//    update(req, reply) {
//        if (!req.params.id) {
//            return reply({err: 'id is required param'}).code(400);
//        }
//        let attributes = {};

//        if (req.payload.name) {
//            attributes.name = req.payload.name;
//        }
//        if (req.payload.city) {
//            attributes.city = req.payload.city;
//        }
//        if (req.payload.address) {
//            attributes.address = req.payload.address;
//        }
//        Company.findByIdAndUpdate(req.params.id, attributes, {new: true}, (err, company) => {
//            if (err) {
//                return reply(err).code(500);
//            }
//            return reply.response(company);
//        })
//    },
//    delete(req, reply) {
//        if (!req.params.id) {
//            return reply({err: 'id is required param'}).code(400);
//        }
//        Company.findByIdAndRemove(req.params.id, (err, result) => {
//            if (err) {
//                return reply(err).code(500);
//            }
//            return reply.response({msg: `company has deleted with id ${req.params.id}`});
//        })
//    }

// };