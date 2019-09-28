const db = require("../database/models");

module.exports = {


  findById: function(req, res) {
    db.User.findById(req.user.id)
      .populate('subcription')
      .then(result => res.json(result.subcriptions))
      .catch(err => res.status(422).json(err));
  },
 
};

