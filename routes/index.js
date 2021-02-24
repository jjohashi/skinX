
/*
 * GET home page.
 */

exports.view = function(req, res){
  console.log('opened index');
  res.render('index');
};

