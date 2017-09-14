// var signupMain = document.querySelector("#signup-main");
// var signup = document.querySelector("#email-signup");
var steps = document.querySelectorAll("li>div");
var highStep = 0;


// signupMain.addEventListener("click", function(){
// 	signup.scrollIntoView();
// });

var i;
for (i = 0; i < steps.length; i++) {
	steps[i].addEventListener("click", function() {
		document.querySelector(".step-highlight").classList.remove("step-highlight");
		this.classList.add("step-highlight");
	})
}