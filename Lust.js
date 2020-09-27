

var start = document.getElementById("StartLVL2"); //This makes the start trial button functional
addEventListener("click", StartLVL2);

function StartLVL2() { //This starts the script below
  alert ("You made it into the second ring of hell, Welcome into Lust."); //intro alert
  var question = prompt ("Have you been described as a sexual deviant").toLowerCase(); //first question
  if (question == "yes") {
  	alert ("Walking a dangerous path arent we ?");
  	question = prompt ("Whilst doing the deed, does one require pain?").toLowerCase(); //second question
  	if (question == "yes") {
  		alert ("How sinfull, whats wrong with good old Missionary?");
  		question = prompt ("Seeing all the nude and lustfull people, do you want to stay here?").toLowerCase(); //third question
  		if (question == "yes") {
  			alert ("Well well well, no surprise here!")
  			alert ("GAME OVER - Try again.")
        location.reload();
  		
  		} else if (question =="no") { //This is the else for the third question
  			alert ("Averting your eyes like that huh, don't like what you see? you're pure go to the third ring.")
			location.replace("Gluttony.html"); //This starts loads the next page
		  }
  	} else if (question == "no") { //This is the else for the second question
  		alert ("Very understandably so, only the sinfull don't separate pain from pleasure, you can go to the third ring")
  		location.replace("Gluttony.html"); //This starts loads the next page
  	}
  } else if (question == "no") { //This is the else for the first question
  	alert ("Staying pure for the afterlife eh, you can go to the third ring.")
  	location.replace("Gluttony.html"); //This starts loads the next page

  }
}

