'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Boom = require('boom');
const mongoose = require('mongoose');
const mongoDbUri = 'mongodb://localhost:27017/dbemployee';
// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 3000
});
const Vision = require('vision');
const Handlebars = require('handlebars');
const Ejs = require('ejs');
//********mongoose**********

mongoose.connect(mongoDbUri, {
    //useMongoClient: true
});
mongoose.connection.on('connected', () => {
    console.log(`app is connected to ${mongoDbUri}`);
});
mongoose.connection.on('error', err => {
    console.log('error while connecting to mongodb', err);
});

//******************  
var employee = require('./models/employee').employee;
//****************** 

//====== ROUTES SECTION=======
const empRoutes = require('./routes/routes');

server.route(empRoutes);

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {

        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    }
});
//============================ 

async function liftOff() {
    await server.register({
        plugin: require('vision') // add template rendering support in hapi
    })

    // server.views({
    //   engines: {
    //     ejs: Handlebars
    //   },
    //   path: __dirname + '/views',
    //   layout: false
    // })

    server.views({
        engines: { ejs: Ejs },
        relativeTo: __dirname,
        path: __dirname + '/views' //`templates/${internals.templatePath}`
    });

    start();
}

liftOff()

async function start() {

    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};


// Start the server