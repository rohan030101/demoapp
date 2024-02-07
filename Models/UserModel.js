const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});


// userSchema.pre('save',  function(next){
//   if(this.password && this.isModified('password')) {
//     bcrypt.hash(this.password,10,(err,hashed)=>{
//       if(err) return next(err);
//       this.password = hashed;
//       console.log(hashed);
//       next()
//     });
//    } else{
//       next()
//     }
// });s
// let User = mongoose.model('User', userSchema)
// module.exports = User;

module.exports = mongoose.model("User", userSchema);