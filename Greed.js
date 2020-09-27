

var start = document.getElementById("StartLVL4"); //This makes the start trial button functional
addEventListener("click", StartLVL4);

function StartLVL4() { //This starts the script below
  alert ("You passed Gluttony, Lets see how greedy you are."); //intro alert
  var question = prompt ("Would you sell your soul for riches?").toLowerCase(); //first question
  if (question == "yes") {
  	alert ("This is exactly why you're here isnt it?");
  	question = prompt ("Will you lie and steal to get richer?").toLowerCase(); //second question
  	if (question == "yes") {
  		alert ("So wrong in so many ways.");
  		question = prompt ("You would rather die rich but hated, is that true?").toLowerCase(); //third question
  		if (question == "yes") {
  			alert ("oh to die loved but poor, sounds like a nightmare to you right?.")
  			alert ("GAME OVER - Try again.")
  			location.reload();
  		
  		} else if (question =="no") { //This is the else for the third question
  			alert ("Maybe poor in wealth but right in love, you may pass to the fifth ring.")
			location.replace("Wrath.html");
		}
  	} else if (question == "no") { //This is the else for the second question
  		alert ("Lying is wrong, and you know it. You may continue to the fifth ring.")
  		location.replace("Wrath.html");
  	}
  } else if (question == "no") { //This is the else for the first question
  	alert ("Nothing is worth more than your soul, You may go into the fifth ring.")
  	location.replace("Wrath.html");

  }
}

