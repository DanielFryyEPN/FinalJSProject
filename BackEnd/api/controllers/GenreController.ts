declare let module;
declare let Genre;
module.exports = {
  create: (req, res) => {
    let params = req.allParams();
    if(req.method == "POST") {
      let genre = {
        name: params.name
      };
      Genre.create(genre).exec((err, genre) => {
        if (err) return res.negotiate(err);
        else return res.ok(genre);
      });
    } else return res.badRequest('You are trying to access with a wrong method');
  },
  update: (req, res) => {
    let params = req.allParams();
    if(req.method == "PUT") {
      let genre = {
        name: params.name
      };
      Genre.update(params.id, genre).exec((err, genre) => {
        if (err) return res.negotiate(err);
        else return res.ok(genre);
      });
    } else return res.badRequest('You are trying to access with a wrong method');
  },
  delete: (req, res) => {
    let params = req.allParams();
    if(req.method == "DELETE") {
      let id = {
        id: params.id
      };
      Genre.destroy(id).exec((err, genre) => {
        if (err) return res.negotiate(err);
        else return res.ok(genre);
      });
    } else return res.badRequest('You are trying to access with a wrong method');
  }
};
