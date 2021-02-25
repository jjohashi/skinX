/*
 * GET skin articles page.
 */
var data = require('../data/results.json')['results'];

exports.viewResults= function(req, res){
    var resid = req.params.resid;
    console.log('opened results '+resid);
    //console.log(data[resid]);
    res.render('results', data[resid]);
  };