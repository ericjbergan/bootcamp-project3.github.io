var mongoose = require("mongoose");

const userSchema = mongoose.Schema;

var UserSchema = new Schema({

  username:{ String,
  required:true
  },
  date:{
    type:date,
    default:Date.now
  }
 
  password:{
  type : String
});

// This creates our model from the above schema, using mongoose's model method
// var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = UserAuthentication = mongoose.model('Auth',userSchema);
