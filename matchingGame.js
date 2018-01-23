var arrClick = [];
var matchedArr =[];
var userTurn = false;
var tick = 0;

function startGame(){
	userTurn = true;
	timer(tick);

}


function getClick(btn){
	if(userTurn){

		var element = btn.value;

		if(element == "1"){
			btn.style.backgroundColor = "blue";
		}
		else if (element == "2"){
			btn.style.backgroundColor ="pink";
		}
		else if (element == "3"){
			btn.style.backgroundColor = "yellow";
		}
		else if (element == "4"){
			btn.style.backgroundColor = "purple";
		}

		arrClick.push(element,btn);

		if(arrClick.length == 2){
			check2loop(arrClick);
			arrClick =[];
		}

	}
	

}

function check2loop(arr,btn){
	var first = arr[0];
	var second = arr[1];
	 if (first == second){

	 	matchedArr.push(first);
	 	matchedArr.push(second);
	 	element = document.getElementByClassName('button' + first)[0];
	 	element.style.backgroundColor = "orange";
	 }
	
}

function timer(tick){
	var timer = setTimeOut(function(){
		tick = tick + 1;

	},1000);
	clearTimeOut(timer);
}

function checkWin(){
	if(matchedArr.length >= 8){
		document.getElementsByTagName('h1').innerhtml = "Great Job!";
		console.log(tick);

	}
}
