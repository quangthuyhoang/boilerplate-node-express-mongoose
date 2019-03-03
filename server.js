'use strict';
const express     = require('express'),
      bodyparser  = require('body-parser'),
      mongoose    = require('mongoose');

const app = express();
const debug = require('debug')('server');
const morgan = require('morgan');

const credentials = require('./credentials');
const product = require('./routes/product.route'); // Imports routes for the products


require('dotenv').load();

const opts = {
  server: {
     socketOptions: {keepAlive: 1}
  }
};

switch(app.get('env')){
  case 'development': 
            mongoose.connect(credentials.mongo.
            development.connectionString, opts);
            break;
  case 'production':                         
            mongoose.connect(credentials.mongo.
            production.connectionString, opts);
            break;
  default:
        throw new Error('Unknown execution environment: ' + 
            app.get('env'));
}


app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use((req, res, next) => {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, *');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // Pass to next layer of middleware
  next();
});



// ROUTING
app.use('/', product);


var port = process.env.PORT || 3000;
app.listen(port, function () {
  debug(`Now running on port: ${port}`)
});

