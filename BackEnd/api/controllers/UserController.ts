declare let module;
declare let User;
module.exports = {
  create: (req, res) => {
    let params = req.allParams();
    if(req.method == "POST") {
      let user = {
        username: params.username,
        email: params.email,
        password: params.password
      };
      User.create(user).exec((err, user) => {
        if (err) return res.serverError('A record with that `username` or `email` already exists');
        else return res.ok('User created');
      });
    } else return res.badRequest('You are trying to access with a wrong method');
  }
};
