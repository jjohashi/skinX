/*
 * GET skin articles page.
 */
var data = require('../data/articles.json');

exports.viewArticles= function(req, res){
    var title = req.params.title;
    console.log('opened');
    res.render('articles', data);
  };