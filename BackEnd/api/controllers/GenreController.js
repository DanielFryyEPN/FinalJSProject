module.exports = {
    create: function (req, res) {
        var params = req.allParams();
        if (req.method == "POST") {
            var genre = {
                name: params.name
            };
            Genre.create(genre).exec(function (err, genre) {
                if (err)
                    return res.negotiate(err);
                else
                    return res.ok(genre);
            });
        }
        else
            return res.badRequest('You are trying to access with a wrong method');
    },
    update: function (req, res) {
        var params = req.allParams();
        if (req.method == "PUT") {
            var genre = {
                name: params.name
            };
            Genre.update(params.id, genre).exec(function (err, genre) {
                if (err)
                    return res.negotiate(err);
                else
                    return res.ok(genre);
            });
        }
        else
            return res.badRequest('You are trying to access with a wrong method');
    },
    delete: function (req, res) {
        var params = req.allParams();
        if (req.method == "DELETE") {
            var id = {
                id: params.id
            };
            Genre.destroy(id).exec(function (err, genre) {
                if (err)
                    return res.negotiate(err);
                else
                    return res.ok(genre);
            });
        }
        else
            return res.badRequest('You are trying to access with a wrong method');
    }
};
