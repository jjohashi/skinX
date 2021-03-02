function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
  function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
          console.log('Successfully logged in with Facebook');
          open('/profile','_self');
          console.log('opened profile');
           FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
  }

  //Add this callback at bottom of facebook.js and add the required functionality in it 
  function changeUser(response){
      //add code to change name and img
      console.log('changed user');
      $('h1#name').text(response.name);
      console.log('changed username');
      $('img#profile').attr('src',response.picture.data.url);
      console.log('changed photo');
      
  }