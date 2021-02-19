
/*
 * GET skincare quiz page.
 */

exports.viewQuiz = function(req, res){
    console.log('opened quiz');
    res.render('quiz');
  };