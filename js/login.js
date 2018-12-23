// function onSignIn(googleUser) {
// 	var profile = googleUser.getBasicProfile();
// 	console.log('ID: ' + profile.getId()); 
// 	console.log('Name: ' + profile.getName());
// 	console.log('Image URL: ' + profile.getImageUrl());
// 	console.log('Email: ' + profile.getEmail());

// 	var myUserEntity = {};
// 	myUserEntity.Id = profile.getId();
// 	myUserEntity.Name = profile.getName();

// 	//Store the entity object in sessionStorage where it will be accessible from all pages of your site.
// 	sessionStorage.setItem('MTUserEntity',JSON.stringify(myUserEntity));

// 	alert(profile.getName());   
// }

// function checkIfLoggedIn() {
// 	if(sessionStorage.getItem('MTUserEntity') == null){
// 		//Redirect to login page, no user entity available in sessionStorage
// 		window.location.href='login.html';
// 	} else {
// 		//User already logged in
// 		var userEntity = {};
// 		userEntity = JSON.parse(sessionStorage.getItem('MTUserEntity'));
// 		window.location.href='dashboard.html';
// 	}
// }

// function signOut() {
// 	sessionStorage.clear();
// 	var auth2 = gapi.auth2.getAuthInstance();
// 	auth2.signOut().then(function () {
// 		console.log('User signed out.');
// 	});
// }

