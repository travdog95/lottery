//initialize variables
var i, lotString, lotSegment;
var form = document.getElementById("lotteryForm");
var userInput;

//gather input from user
form.addEventListener("submit", (e) => {
	e.preventDefault();
	userInput = document.getElementById("lotAmt").value;
	
	//don't let the user "get lottery numbers" if there is no input
	if (userInput === "") return;

	generateLotteryNumber(userInput);

});

//ask user how many numbers they want to input
function generateLotteryNumber(userInput, runAgain){
	
	
	//insert dashes between each lottery number
	lotString = "";
	
	for (i = 0; i < userInput; i++){
		lotSegment = Math.ceil(Math.random()*99);
		if (i == 0){
			lotString += lotSegment;
		}else{
			lotString += "-" + lotSegment;
		}	
	}
	
	document.getElementById("lotteryNumber").innerHTML = lotString;
	//toggle between gathering the lott amount and displaying the lott ticket
	if (runAgain === undefined) {
		document.getElementById("lotteryNumberContainer").classList.toggle("hidden");
		document.getElementById("runAgain").classList.toggle("hidden");
		document.getElementById("runAgainButton").classList.toggle("hidden");
	}
}
//run file again if "Run Again" button gets pushed
function runAgain(){

	generateLotteryNumber(userInput, true);
}
	

