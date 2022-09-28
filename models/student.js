const mongoose = require('mongoose')
const { Schema } = mongoose;

const studentSchema = new Schema({
 student_name:String,
 subject:String,
 student_roll:Number,
 date_Of_birth:String,
},
{ timestamps: true }
);

const student = mongoose.model('student', studentSchema);
module.exports=student;
