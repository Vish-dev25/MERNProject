const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema ({
    name: 
    {
      type:String,
      required : true
    },
    email: 
    {
      type:String,
      required : true
    },
    password : 
    {
      type:String,
      required : true
    },
    status :
    {
      type: Boolean,
      required : true,
      default :false
    },
    admin : 
    {
      type: Boolean,
      required : true,
      default : false
    }
  });



// userSchema.pre('save',async function(next){
//   if(this.isModified('password')){

//     this.password = bcrypt.hash(this.password, 12);
//   }
//   next();
// })

module.exports = mongoose.model('User', userSchema);


