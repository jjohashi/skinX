/*
 * GET skin articles page.
 */
var data = require('../data/articles.json')['articles'];

exports.viewArticles= function(req, res){
    var id = req.params.id;
    console.log(id);
    console.log('opened');
    console.log(data[id]);
    res.render('articles', data[id]);

  };