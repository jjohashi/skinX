

 /*load data*/
var data = require('../data.json');

/*
 * GET signup page.
 */
exports.view = function(req, res){
    console.log('opened sign up page');
    res.render('index', data);
};

/*
 * GET login page.
 */
exports.viewLogin = function(req, res){
    console.log('opened login');
    res.render('login', data);
};

/*
 * GET skin profile page.
 */

exports.viewProfile = function(req, res){
    var length = data['users'].length;
    //console.log('profile length: '+length);

    //console.log('opened profile');
    //console.log(data['users'][length-1]);
    res.render('profile', data['users'][length-1]);
  };

/*
 * POST user.
 */
exports.saveUser = function(req, res){
    //profileData = req.body.result;
    var theUser = req.body;
    //console.log(theUser);

    data.users.push(theUser);

    res.send(theUser);
}

/*
 * POST results.
 */
exports.saveResult = function(req, res){
    var result = req.body.userResults;
    //console.log(result);

    var length = data['users'].length;
    var test = {username:data['users'][length-1]['username'],
                password:data['users'][length-1]['password'],
                userResults:result};
   data.users.push(test);

   var alength = data['users'].length;
   //console.log('length after: '+alength)

    //console.log(data['users'][alength-1]['username']);
}


/*
 * GET home page.
 */

exports.viewHome = function(req, res){
    console.log('opened home');
    res.render('home');
  };

/*
 * GET skin education page.
 */

exports.viewEducation = function(req, res){
    console.log('opened education');
    res.render('education', data);
};

/*
 * GET skin articles page.
 */

exports.viewArticles= function(req, res){
    var id = req.params.id;
    console.log('opened article'+id);
    //console.log(data[id]);
    res.render('articles', data['articles'][id]);
  };

/*
 * GET skincare quiz page.
 */

exports.viewQuiz = function(req, res){
    console.log('opened quiz');
    res.render('quiz');
};

/*
 * GET results page.
 */

exports.viewResults= function(req, res){
    var resid = req.params.resid;
    console.log('opened results '+resid);
    //console.log(data[resid]);
    res.render('results', data['results'][resid]);
  };






  