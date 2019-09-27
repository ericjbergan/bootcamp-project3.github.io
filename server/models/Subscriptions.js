var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model

// {
//   "amount":"something",
//   "category":"some category",
//   "store":"Some store"
// }
var Schema = new Schema({
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
 username:{
   type:String
 }
});

// This creates our model from the above schema, using mongoose's model method
var subscriptions = mongoose.model("subscription", Schema);

// Export the Note model
module.exports = subscriptions;


