/**
 * Created by dllo on 17/4/24.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
    var username=req.body.username;
    var password=req.body.password;

    var mysql=require('mysql');
    var options={
        user:'root',
        password:'123456',
        host:'localhost',
        port:3306,
        database:'HTML5',
        charset:'utf8',
        connectionLimit:10
    };
    var pool=mysql.createPool(options);
    var sqlStr1='select * from login where username ='+ username;

    pool.query(sqlStr1,function (error,results) {
//数据库存有一条数据  username=1,password=2
           if(results.length != 0){
               console.log(results[0]);
               if(results[0].password==password){
                   res.render('loginSuccess');
               }else {
                   res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
                   res.end('密码错误');
               }
           }else {
               res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
               res.end('账号不存在');
           }

    });



});

module.exports = router;