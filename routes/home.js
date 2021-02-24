
/*
 * GET home page.
 */

exports.viewHome = function(req, res){
  console.log('opened index');
  res.render('home');
};

