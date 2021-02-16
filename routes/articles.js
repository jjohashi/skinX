/*
 * GET skin articles page.
 */

exports.viewArticles= function(req, res){
    console.log('opened articles');
    res.render('articles');
  };