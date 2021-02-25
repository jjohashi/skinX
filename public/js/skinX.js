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

