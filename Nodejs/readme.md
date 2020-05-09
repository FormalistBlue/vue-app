
# express 项目笔记 
app === express()


# express API  
app.set   设置一个中间件 (middware )
app.use   执行调用中间件 
app.get   get 请求
app.post  post 请求 


中间件  本质是一个函数    自定义中间件   (自定义函数 实现某些功能)  
中间件 有 先后顺序之分    后面的中间件可以使用之前的中间件功能  
app.use(one)
app.use(two);
next  表示进入下一个中间件 
如果没有写 next 表明最后一个 中间件


# 0411 今日重点 
a. mongoose 增删改查 
b. 安装 启动 epxress 项目
c. express 项目 route 模块  (路由别名)
d. res.send  ren.json  res.render(ejs)
e. req.query   req.body (post 提交的formData数据) 
f. ejs  <%- %>  流程控制 ( <% JavaScript %>  包含 )  include 
g. 注册逻辑


(第二周任务  继续讲2天的node  周三开始 Vue  ) 
#0413 今日重点     
a. 注册 + 登录逻辑    (session)
b. 电影列表 页面 (查询)
c. 根据电影 id 进入电影详情 (查询)
d. 评论电影 (insert)
e. 电影评论列表 (find + 分页 + 搜索)


# session 用法 
1. 安装 cnpm i express-session -S
2. 配置中间件 必须在路由中间件前面
3. req.session 设置需要保存的数据 


# 项目目录 
1. bin  启动项目的文件
2. public 服务器静态文件
3. routes  路由  (index.js  users.js)
4. utils  自定义的共有模块文件  (connect  model 操作数据库) 
5. views  视图文件  页面  必须配置路由才能渲染   res.render()
6. app.js  核心的启动文件  




# 路由路径   
1. /login  显示 login页面
2. /users/login  登录提交formdata的服务器地址 
3. /zhuce  显示注册页面 
4. /users/zhuce 接收注册提交的formdata 数据 
5.  重定向  某一个能显示页面 /home  /login   


#0414    
a. 重置密码    
b. 电影列表 页面 (查询)   
c. 根据电影 id 进入电影详情 (查询)  
d. 评论电影 (insert)


user  插入 修改  查询  删除?
mvs 


#0415 
a. 电影列表  find
b. 删除评论  delete
c. 修改评论  update
d. 评论分页  find  


#0415 作业 (自愿)
a. 点击电影标题 查看 这个电影的所有评论  Comment.find({mid})
b. 点击 评论人  查看 这个人 的所有 评论  Comment.find({username})



# 总结
node + express + mongodb(mongoose ) + bootstrap 实现简单管理系统

(users + comments + uids + mvs )  

users ==>  注册 + 登录 +  查询用户信息 + 修改密码

mvs  ==>  查询电影   

comments ==>  提交评论  +  修改评论  + 删除评论  + 评论分页  

uids   ==>  自增长 id  



cnpm i cors -S

app.use(cors);    // 解决跨越问题   重置协议  服务器没有任何安全协议  
