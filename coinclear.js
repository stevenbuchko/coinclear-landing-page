// var signupMain = document.querySelector("#signup-main");
// var signup = document.querySelector("#email-signup");
var steps = document.querySelectorAll("li");
var highStep = 0;
var droidImgs = ["assets/CCInfo-Android.png","assets/Portfolio-Android.png","assets/Dashboard-Android.png"];
var droidScreen = document.querySelector(".step-screen");

// signupMain.addEventListener("click", function(){
// 	signup.scrollIntoView();
// });

var i;
for (i = 0; i < steps.length; i++) {
	steps[i].addEventListener("click", function() {

		document.querySelector(".step-highlight").classList.remove("step-highlight");
		this.classList.add("step-highlight");
		highStep = parseInt(this.innerText[0]-1)
		console.log(highStep);
		droidScreen.src = droidImgs[highStep];

	})
}