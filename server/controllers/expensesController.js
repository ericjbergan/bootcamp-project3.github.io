
const db = require("../models");

module.exports = {

  findAll: function(req, res) {
    db.exprenses.find(req.query)
      .then(dbExpenses => res.json(dbExpenses))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.expenses.findById(req.params.id)
      .then(dbExpenses => res.json(dbExpenses))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.expenses.create(req.body)
      .then(dbExpenses => res.json(dbExpenses))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.expenses.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbExpenses => res.json(dbExpenses))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.expenses.findById(req.params.id)
      .then(dbExpenses => dbExpenses.remove())
      .then(dbExpenses => res.json(dbExpenses))
      .catch(err => res.status(422).json(err));
  }
};

