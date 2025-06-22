$(document).ready(function() {
 $("#loginButton").click(function() {
    $("#loginPopup").show();
 });

 $("#loginPopup .close").click(function() {
    $("#loginPopup").hide();
 });

 $("#signupPopup .close").click(function() {
    $("#signupPopup").hide();
 });

 $("#loginForm").submit(function(event) {
    event.preventDefault();
    // Your logic for the login form
 });

 $("#signupForm").submit(function(event) {
    event.preventDefault();
    // Your logic for the signup form
 });

function goToLoginPage() {
   window.location.href = 'LoginPage.html';
}

function goToTryItOutPage() {
   window.location.href = 'Try_it_out.html';
}
});