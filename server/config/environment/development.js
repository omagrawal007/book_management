'use strict';

// Development specific configuration
// ==================================
module.exports = {
  version:'0.0.1',
  // MongoDB connection options
  mongo: {
    // uri: 'mongodb://localhost:27017/timesheet',
    uri: 'mongodb://b_management:b12345@ds163330.mlab.com:63330/b_management',
  },
  email:{
    host    : 'mail.hcl.com',
    user    : 'no-reply@hcl.com',
    password  : 'hcl',
    sender    : 'hcl <hcl.com>'
  },
};
