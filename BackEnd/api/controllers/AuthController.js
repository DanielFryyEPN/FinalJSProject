/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords');
var jwt = require('jsonwebtoken');

module.exports = {
  login: function (req, res) {
    var params = req.allParams();
    if (params.email && params.password) {
      User.findOne({email: params.email}).exec(function (err, foundUser) {
        if (err) return res.serverError('Error');
        if (!foundUser) return res.notFound('User not found');
        else {
          Passwords.checkPassword({
            passwordAttempt: params.password,
            encryptedPassword: foundUser.password
          }).exec({
            error: function (err) {
              return res.serverError(err);
            },
            incorrect: function () {
              return res.badRequest('invalid data');
            },
            success: function () {
              var token = jwt.sign(
                {
                  exp: Math.floor(Date.now() / 1000) + (60 * 60),
                  data: {
                    id: foundUser.id,
                    username: foundUser.username,
                    email: foundUser.email
                  }
                },
                'finalJsProject'
              );
              return res.ok(token);
            }
          });
        }
      })
    }
  }
};

