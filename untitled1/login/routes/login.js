/**
 * Created by dllo on 17/4/24.
 */
var express=require('express');
var router=express.Router();
router.get('/', function(req, res) {
    res.render('login');
});

module.exports = router;