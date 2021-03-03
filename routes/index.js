/*
 * GET signup page.
 */

 /*load data*/
var data = require('../data/profile.json');

exports.view = function(req, res){
    console.log('opened sign up page');
    res.render('index', data);
};