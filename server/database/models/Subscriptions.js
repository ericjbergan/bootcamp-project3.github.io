// const mongoose = require("mongoose");

// // Save a reference to the Schema constructor
// const Schema = mongoose.Schema;

// // Using the Schema constructor, create a new NoteSchema object
// // This is similar to a Sequelize model
// const subscriptionSchema = new Schema({
//   // `title` must be of type String
//   name: {
//     type: String,
//     required: true
//   },

//   subURL: {
//     type: String,
//     required: false
//   },

//   amount: {
//     type: Number,
//     required: true
//   },

//   date: { 
//     type: Date, 
//     default: Date.now,
//     required: false
//   }

// });

// // This creates our model from the above schema, using mongoose's model method
// const subscriptions = mongoose.model("subscription", subscriptionSchema);

// // Export the Note model
// module.exports = subscriptions;

