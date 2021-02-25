
/*
 * GET skin education page.
 */
var data = require('../data/articles.json');
exports.viewEducation = function(req, res){
    console.log('opened education');
    res.render('education', data);
};
  