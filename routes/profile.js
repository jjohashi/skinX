
/*
 * GET skin profile page.
 */

/*load data*/
var data = require('../data/profile.json');

exports.viewProfile = function(req, res){
    /*get userid from login*/
    var id = res.query.userid;
    console.log('opened profile');
    res.render('profile', data);
  };
  