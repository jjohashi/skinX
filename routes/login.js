/*
 * GET login page.
 */

 /*load data*/
var data = require('../data/profile.json');

exports.viewLogin = function(req, res){
    console.log('opened login');
    res.render('login', data);
};