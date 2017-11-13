		
		




		
		function displayDll() //function used for the time
		{
				// var dt = new Date(); //a variable used to store a new date
				// var time = dt.toLocaleTimeString(); //a variable used to store a new time
				// var year = dt.getFullYear();
				// document.getElementById("thetime").innerHTML = time; //displays data in the paragrahp tag thetime from a variable called time
				// document.getElementById("theyear").innerHTML = year;

				var x = document.getElementById("ddlSelect").value;					
			    document.getElementById("lblddl").innerHTML = "Utility: " + x;
		}

		function displayAmount(){
				document.getElementById("lblAmount").innerHTML = "Amount Paid: $" + document.getElementById("InputAmount").value;//stores amount


		}
		
		


