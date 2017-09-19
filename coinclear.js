// var signupMain = document.querySelector("#signup-main");
// var signup = document.querySelector("#email-signup");
var steps = document.querySelectorAll("li");
var highStep = 0;
var droidImgs = ["assets/CCInfo-Android.png","assets/Portfolio-Android.png","assets/Dashboard-Android.png"];
var droidScreen = document.querySelector(".step-screen");
var timer;

// signupMain.addEventListener("click", function(){
// 	signup.scrollIntoView();
// });

var i;
for (i = 0; i < steps.length; i++) {
	steps[i].addEventListener("click", function() {
		clearInterval(timer);
		
		document.querySelector(".step-highlight").classList.remove("step-highlight");
		this.classList.add("step-highlight");
		highStep = parseInt(this.innerText[0]-1)
		console.log(highStep);
		droidScreen.src = droidImgs[highStep];

		timer = createTimer();
	})
}

window.onload = createTimer();

function createTimer() {
	clearInterval(timer)
	timer = setInterval(function() {
		if (highStep < 2) {
			highStep++;
		} else {
			highStep = 0;
		}

		document.querySelector(".step-highlight").classList.remove("step-highlight");
		steps[highStep].classList.add("step-highlight");
		droidScreen.src = droidImgs[highStep];
	}, 5000);
	return timer
}