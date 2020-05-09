
// 路由里面需要 操作数据库   
const mongoose = require("mongoose");
const Schema = mongoose.Schema;   // 构造函数  Schema
const user_schema = new Schema({   // 定义表结构 
    username : String,
    password :String,
    age : Number,
    nickname:String,
    mobile:Number,
    // confirmpwd:String,
    time:Date,
    email:String,
    address:String,
    avatar:String
});  

exports.User = mongoose.model("user",user_schema)  //表结构模型 英语复数   users

const emp_schema = new Schema({
    empname:String,
    empno:Number,
    empage:Number,
    empLeaear:String
});

exports.Emp = mongoose.model("emp",emp_schema);  // Emp 来操作 emps 表 

const student_schema = new Schema({
    stuname:String
});

exports.Student = mongoose.model("student",student_schema); // students 


const movie_schema = new Schema({
    "rating" :Object, 
    "genres" :Array, 
    "title" : String, 
    "casts" :Array, 
    "collect_count" : Number, 
    "original_title" : String, 
    "subtype" : String, 
    "directors" :Array, 
    "year" : String, 
    "images" : Object, 
    "alt" : String, 
    "id" : String
});

exports.Mv = mongoose.model("mv",movie_schema);    // mvs 


const comment_schema = new Schema({
    id:Number,  // 评论序号
    title:String, // 评论标题
    content:String, // 评论内容
    username:String, // 评论人
    time:String, // 评论时间 
    mid:String, // 评论的电影id 
    mtitle:String, // 评论的电影标题  
    mpic:String  // 评论的电影图片 
});
exports.Comment = mongoose.model("comment",comment_schema);  // comments


// 控制id 自增长 
const uid_schema =  new Schema({
    id:Number, 
    name:String  // 表名 
});
exports.Uid = mongoose.model("uid",uid_schema)  // uids 