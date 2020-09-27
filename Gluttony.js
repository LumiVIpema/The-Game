

var start = document.getElementById("StartLVL3"); //This makes the start trial button functional
addEventListener("click", StartLVL3);

function StartLVL3() { //This starts the script below
  alert ("You passed Lust,I'm starting to wonder why you are here in the first place. Lets see how you deal with Gluttony!"); //intro alert
  var question = prompt ("Do you eat out of boredom?").toLowerCase(); //first question
  if (question == "yes") {
  	alert ("Thats bad for your health you know.");
  	question = prompt ("Do you smoke the devils lettuce?").toLowerCase(); //second question
  	if (question == "yes") {
  		alert ("You're spiraling out of control arent you ?");
  		question = prompt ("Do you overindulge with the blood of christ?").toLowerCase(); //third question
  		if (question == "yes") {
  			alert ("Alcohlism is not taken on kindly around these parts.")
  			alert ("GAME OVER - Try again.")
  			location.reload();
  		
  		} else if (question =="no") { //This is the else for the third question
  			alert ("Good, you should respect the blood of christ, you may continue to the next ring.")
			location.replace("Greed.html");
		}
  	} else if (question == "no") { //This is the else for the second question
  		alert ("A clear mind and a clean body makes you pure, you may progress to the next ring.")
  		location.replace("Greed.html");
  	}
  } else if (question == "no") { //This is the else for the first question
  	alert ("Staying pure for the afterlife eh, you can go to the third ring.")
  	location.replace("Greed.html");

  }
}

