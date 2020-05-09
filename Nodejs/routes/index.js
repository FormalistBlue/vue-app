var express = require('express');
var router = express.Router();    // express 内置 Router 模块


var {
  Mv,
  User
} = require("../utils/model");

var {
  checkSession
}  = require("../utils");

// 路由文件    清清楚楚看到你写了哪些接口... 
// 明白 express 路由机制 
// 根据 路由路径加载 对应路由数据 


/* GET home page. */
// router 路由模块 实现动态路由数据交互(页面 json 字符串)
// get get请求
// / 路由 路径 (req.url)
// req 请求信息  
// res 响应数据   (res.render res.send res.json res.redirect)
// next 进入下一个中间件
router.get('/', function(req, res, next) {
   res.render('./index.ejs', {
      title: 'Express',
      msg:"NZ1903 - daydayup",
      flag:!!1,
      username:"大左左",
      oh:"<h2>hello - world</h2>",
      course:["Node","Vue","React","Angular"]
    });
});

router.get("/home",(req,res)=>{
   res.render("home",{
     username:req.session.username 
   })
})

router.get("/login",(req,res)=>{
  // ? 查询参数  req.query 
  var username =  req.query.username || "";  // 注册成功 
  res.render("login",{username:username});
});

// 显示 ejs文件 必须配置路由 执行 render 渲染 
router.get("/zhuce",(req,res)=>{
  res.render("zhuce");  
})

router.get("/my",(req,res)=>{

  if(req.session.username){  // 已经登录
    User.findOne({
      username:req.session.username
    }).then(result=>{
      console.log(result);
      res.render('my',{result});  // 对象 key-value 相同 直接合并简写 
    })
  }else{
    res.send(`<script>alert("你的登录已经失效,请重新登录!");location.href='/login'</script>`)
  }

})

router.get("/nz1903",(req,res)=>{
  res.send("NZ1903-逆战必胜- 加油吧")  // res.send 响应字符串 
})

router.get("/logout",(req,res)=>{
    // 销毁 req.session 
    req.session.destroy(()=>{
        res.redirect("/home");
    })
})

router.get("/movie",(req,res)=>{
  // 自动判断是否登录 
  const query = req.query;  // 前端发送过来的参数 
  console.log(query);
  var searchObj = {};  // 搜索条件 
  var sortObj = {};    // 排序条件 
  if(query['keyword']){  // 搜索 
    var keyword = query["keyword"];
    searchObj = {
      $or:[  // 或查询
        { title : new RegExp(keyword)},
        { year: new RegExp(keyword)},
        { genres: new RegExp(keyword)},
        // { 'rating.average': new RegExp(keyword*1)},  // 数字 * 1  9.6
      ]
    }
  }else{   // 排序条件   ?yaer=1  {year:1}
    sortObj = query; 
  }
  checkSession(req,res,()=>{
    Mv.find(searchObj,{_id:0})
    .sort(sortObj)  // {year:1}
    .then(result=>{
      // console.log(result);
      res.render("movie",{result});
    })
  })
})


router.get("/resetpwd",(req,res)=>{
    if(req.session.username){
      res.render("resetpwd");
    }else{
      res.send(`<script>alert("你的登录已经失效,请重新登录!");location.href='/login'</script>`)
    }
})

router.get("/chat",(req,res)=>{
  checkSession(req,res,()=>{
    res.render("chat");
  })
})

module.exports = router;


