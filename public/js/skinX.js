'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected for Login!");
    /*login clicklisteners*/
	$("#login-form-submit").click(loginSubmit);

    /*signup clicklistener*/
    $("#sign-form-submit").click(signSubmit);

    /*quiz clicklistener*/
    $("#quizSubmit").click(check);
}


/*function for submitting login information*/
function loginSubmit(e) {
    e.preventDefault();
    var username = $('#email-field').val();
    console.log('username is: ' + username);
    var password = $('#password-field').val();

    if(username=='' && password==''){
        alert("Please fill all fields...!!!!!!");
    }

    else {
        alert("You have successfully logged in.");
        open('/home','_self');
    }
}

/*function for submitting sign up information*/
function signSubmit(e) {
    e.preventDefault();
    var fullName = $('#fullName').val();
    var email = $('#email').val();
    var password = $('#password-field').val();
    var cpassword = $('#cpassword-field').val();

    if (fullName == '' || email == '' || password == '' || cpassword == '') {
        alert("Please fill all fields...!!!!!!");
    } 

    else if ((password.length) < 5) {
        alert("Password should atleast 5 character in length...!!!!!!");
    }

    else if (!(password).match(cpassword)) {
        alert("Your passwords don't match. Try again?");
    } 

    else {
        alert("You have successfully logged in.");
        open('/home','_self');
    }
}

/*function for adding up quiz score*/
function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    console.log(q1);
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');

    if (q2=="Acne" || q2=="Redness" ) {
        c += 50;
    }

    if (q3=="Large and all over" || q3=="Medium sized and all over") {
        c += 50;
    }

    if (q4=="Often" || q4=="Very frequently") {
        c += 50;
    }

    if (c<50) {
        /*result.textContext="Your result is Dry Skin";*/
        open('/results/1','_self');

    } else if(c>=50 && c<=100) {
        /*result.textContext="Your result is Combination Skin";*/
        open('/results/2','_self');

    } else if(c>100) {
        /*result.textContext="Your result is Oily Skin";*/
        open('/results/0','_self');

    }
}

