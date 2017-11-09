		
		var tEvt = setInterval('displayTime()', 1000); //a variable used to store the time
		window.onload=displayTime;
		
		function displayTime() //function used for the time
		{
				var dt = new Date(); //a variable used to store a new date
				var time = dt.toLocaleTimeString(); //a variable used to store a new time
				var year = dt.getFullYear();
				document.getElementById("thetime").innerHTML = time; //displays data in the paragrahp tag thetime from a variable called time
				document.getElementById("theyear").innerHTML = year;
		}
		
		function checkUserPass() //function that is used for displaying and storing 
		{
		var un = document.getElementById("inputEmail"); //calls un
		var pw = document.getElementById("inputPassword");//calls ps
		
		alert(un.value);
		alert(pw.value);
		
		<!-- if(un.value = "john@test.co.uk" && pw.value = "pass"){ -->
			<!-- alert("Successful!"); //an error message for the user -->
		<!-- }else{ -->
			<!-- alert("Error - Please enter correct username and password!"); //an error message for the user -->
		<!-- }//end of if -->
		}//end of function


