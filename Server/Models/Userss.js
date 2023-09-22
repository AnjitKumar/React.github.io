const mongoose=require('mongoose')
const TeacherSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})
const Teachermodel=mongoose.model('NewUser',TeacherSchema);
module.exports=Teachermodel