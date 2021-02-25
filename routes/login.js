/*
 * GET login page.
 */

exports.viewLogin = function(req, res){
    console.log('opened login');
    res.render('login');
};


