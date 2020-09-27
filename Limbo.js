

var start = document.getElementById("StartLVL1"); //This makes the start trial button functional
addEventListener("click", StartLVL1);

function StartLVL1() { //This starts the script below
  alert ("As you might know, you are in Limbo here where the unbaptised and the virtuous pagans, wander in eternity."); //intro alert
  var question = prompt ("Do you know what the 8 Sabbats are?").toLowerCase(); //first question
  if (question == "yes") {
  	alert ("Hmm that sounds pretty Paganish to me, but Im in a good mood you get another question to prove me wrong. ");
  	question = prompt ("The veil between our worlds is the thinnest during Samhuinn, is this true?").toLowerCase(); //seconc question
  	if (question == "yes") {
  		alert ("Hmmm intresting, youre a curious fellow aren't you?");
  		question = prompt ("Are you baptised?").toLowerCase(); //third question 
  		if (question == "no") {
  			alert ("I knew it, seems you won't be leaving soon little pagan.")
  			alert ("GAME OVER - Try again.")
        location.reload();
  		
  		} else if (question =="yes") { //This is the else for the third question
  			alert ("Very intresting, seems you are safe to continue enter the second ring.")
			location.replace("Lust.html"); //This starts loads the next page
		  }
  	} else if (question == "no") { //This is the else for the second question
  		alert ("Oh young friend, if you only knew how wrong you were, Enter the second ring.")
      location.replace("Lust.html"); //This starts loads the next page
  	}
  } else if (question == "no") { //This is the else for the first question
  	alert ("They are pagan holidays, but you wouldnt know that as a good christian right? Enter the second ring.")
    location.replace("Lust.html"); //This starts loads the next page
  }
}

