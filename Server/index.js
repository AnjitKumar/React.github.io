const express=require('express');
const cors=require('cors');
const app=express();
const mongoose=require('mongoose');
const TeacherModel=require('./Models/Userss');
mongoose.connect('mongodb://127.0.0.1:27017/UserPractise')
app.use(cors());
app.use(express.json())
// const alert=require('alert');

app.get('',(req,resp)=>{
    resp.send('hello world')
})
app.post('/register',(req,resp)=>{
    TeacherModel.create(req.body)
    .then(e=>resp.json(e))
    .catch(err=>resp.json(err))
    // alert(' succsessfully done..')
})
app.post('/Login',(req,resp)=>{
    const{email,password}=req.body;
TeacherModel.findOne({email:email})
.then(user=>{
    if(user){
        if(user.password==password){
            resp.json('success')
        }else{
            resp.json('the password is incorrect..')
        }
    }else{
        resp.json('no record exist..')
    }
})
})


app.listen(3001,function(){
    console.log('server is working.')
})
    

