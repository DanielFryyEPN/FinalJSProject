/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

//var Passwords = require('machinepack-passwords');

module.exports = {
  connection: 'localDiskDb',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    username: {
      type: 'string',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      unique: true,
      required: true
    }
  }/*,
  beforeCreate: function (user, cb) {
    Passwords.encryptPassword({
      pass: user.password
    }).exec({
        error: function (err) {
          cb('Error de enciptacion', err);
        },
        success: function (hashedPassword) {
          user.pass = hashedPassword;
          cb();
        }
      });
  }*/
};

