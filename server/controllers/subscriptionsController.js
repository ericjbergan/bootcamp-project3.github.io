const db = require("../models");

module.exports = {

  findAll: function(req, res) {
    db.subscription.find(req.query)
      .then(dbSubscription => res.json(dbSubscription))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.subscription.findById(req.params.id)
      .then(dbSubscription => res.json(dbSubscription))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.subscription.create(req.body)
      .then(dbSubscription => res.json(dbSubscription))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.subscription.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbSubscription => res.json(dbSubscription))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.subscription.findById(req.params.id)
      .then(dbSubscription => dbSubscription.remove())
      .then(dbSubscription => res.json(dbSubscription))
      .catch(err => res.status(422).json(err));
  }
};

