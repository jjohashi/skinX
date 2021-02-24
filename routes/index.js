/*
 * GET signup page.
 */

exports.view = function(req, res){
    console.log('opened sign up page');
    res.render('index');
};