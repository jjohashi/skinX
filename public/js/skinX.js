'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    /*login clicklisteners*/
	$("#login-form-submit").click(loginSubmit);

    /*signup clicklistener*/
    $("#sign-form-submit").click(signSubmit);

    /*quiz clicklistener*/
    $("#quizSubmit").click(check);

    console.log("Javascript connected for Login, Sign Up, & quiz!");
}

/*var userdata = JSON.parse(profile);
console.log(userdata);*/
/*function for submitting login information*/
function loginSubmit(result) {
    console.log('result');
    var username = $('#email-field').val();
    console.log('username is: ' + username);
    var password = $('#password-field').val();

    if(username=='' && password==''){
        alert("Please fill all fields...!!!!!!");
    }

    else {
        var newUser = {username:username, password:password, userResults: "/results/3"};
        
        $.post('saveUser', newUser, postCallBack);

        function postCallBack(res){
            
        }
        
        open('/home','_self');
    }
}


/*function for submitting sign up information*/
function signSubmit(e) {
    e.preventDefault();
    var username = $('#email-field').val();
    var password = $('#password-field').val();
    var cpassword = $('#cpassword-field').val();

    

    if (username == '' || password == '' || cpassword == '') {
        alert("Please fill all fields!");
    } 

    else if ((password.length) < 5) {
        alert("Password should at least 5 character in length!");
    }

    else if (!(password).match(cpassword)) {
        alert("Your passwords don't match. Try again?");
    } 

    else {
        var newUser = {username:username, password:password, userResults: "/results/3"};
        
        $.post('saveUser', newUser, postCallBack);

        function postCallBack(res){
            
        }
        open('/home','_self');

    }
}

/*function for adding up quiz score*/
function check() {
    console.log("in check");
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');

    //check if all fields are clicked
    if(q1== '' || q2== '' || q3== '' || q4== ''){
        alert("Please fill in all fields");
    }

    else{
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
           var result = {userResults:'/results/1'};
        
           $.post('saveResult', result, postCallBack);

            function postCallBack(res){
            
            }
           open('/results/1','_self');

        } else if(c>=50 && c<=100) {
            var result = {userResults:'/results/2'};
        
            $.post('saveResult', result, postCallBack);

            function postCallBack(res){
            
            }
            open('/results/2','_self');

        } else if(c>100) {
            var result = {userResults:'/results/0'};
        
            $.post('saveResult', result, postCallBack);

            function postCallBack(res){
            
            }

            open('/results/0','_self');

        }
    }
}

