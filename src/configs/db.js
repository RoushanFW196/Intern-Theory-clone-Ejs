const mongoose = require('mongoose');

module.exports = () =>{
   return mongoose.connect('mongodb+srv://surajuser:suraj1234@cluster0.nzh42.mongodb.net/intentheory');
}