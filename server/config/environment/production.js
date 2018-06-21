'use strict';

// Production specific configuration
// =================================
module.exports = {
  version:'0.0.1',
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://b_management:b12345@ds163330.mlab.com:63330/b_management'
  }
};