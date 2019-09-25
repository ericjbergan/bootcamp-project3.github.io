const db = require("../models");

module.exports = {

  findAll: function(req, res) {
    db.Subscription.find(req.query)
      .then(dbSubscription => res.json(dbSubscription))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Subscription.findById(req.params.id)
      .then(dbSubscription => res.json(dbSubscription))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Subscription.create(req.body)
      .then(dbSubscription => res.json(dbSubscription))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Subscription.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbSubscription => res.json(dbSubscription))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Subscription.findById(req.params.id)
      .then(dbSubscription => dbSubscription.remove())
      .then(dbSubscription => res.json(dbSubscription))
      .catch(err => res.status(422).json(err));
  }
};

