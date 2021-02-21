/*
 * GET skin articles page.
 */
var data = require('../data/articles.json');
//var data = require('/Users/kellyli/Desktop/CSE170/skinX/data/articles.json')

exports.viewArticles= function(req, res){
    //var title = req.params.title;
    console.log('opened articles');
    res.render('articles', data);
  };