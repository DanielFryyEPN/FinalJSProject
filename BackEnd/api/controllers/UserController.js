module.exports = {
    create: function (req, res) {
        var params = req.allParams();
        if (req.method == "POST") {
            var user = {
                username: params.username,
                email: params.email,
                password: params.password
            };
            User.create(user).exec(function (err, user) {
                if (err)
                    return res.serverError('A record with that `username` or `email` already exists');
                else
                    return res.ok('User created');
            });
        }
        else
            return res.badRequest('You are trying to access with a wrong method');
    }
};
