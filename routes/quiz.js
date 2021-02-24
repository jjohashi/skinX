
/*
 * GET skincare quiz page.
 */

exports.viewQuiz = function(req, res){
    console.log('opened quiz');
    res.render('quiz');
};

function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');
    if (q1=="17 or younger") {c++}
    if (q2=="Acne") {c++}
    if (q3=="Large and all over") {c++}
    if (q4=="Often") {c++}
    quiz.style.display="none";

    if (c<=3) {
    result.textContext="Your result is ${c}"
    } else {
    result.textContext="Your result is ${c}"
    }
}