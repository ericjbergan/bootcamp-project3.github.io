var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var expenseSchema = new Schema({
  // `title` must be of type String
  amount:{
    type: String,
    required: true
  },

   category:{
    type: String,
    required: true
  },

    store:{
    type: String,
    required: true
  }

});

// This creates our model from the above schema, using mongoose's model method
var expenses = mongoose.model("expenses", expenseSchema);

// Export the Note model
module.exports = expenses;


