var signupMain = document.querySelector("#signup-main");
var signup = document.querySelector("#email-signup");


signupMain.addEventListener("click", function(){
	signup.scrollIntoView();
});

signupMain.addEventListener("hover", function(){
	signupMain.style.backgroundColor = "#60646b";
});