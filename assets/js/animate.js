var userScore=0;
var computerScore=0;
const snake=document.getElementById('s');
const water=document.getElementById('w');
const gun=document.getElementById('g');
const userScore_span=document.getElementById("user_score");
const computerScore_span=document.getElementById("computer_score");
const result_div=document.querySelector(".result > p");


function convertToWord(choice){
	switch(choice){
		case "s":
		  return "Snake";
		  break;
	    case "w":
		  return "Water";
		  break;
	    case "g":
		  return "Gun";
		  break;
	}
}
function win(user_choice,computer_choice){
	userScore++;
	userScore_span.innerHTML=userScore;
    result_div.innerHTML=convertToWord(user_choice)+" beats "+convertToWord(computer_choice)+". User Wins!!";
}


function lose(user_choice,computer_choice){
	computerScore++;
	computerScore_span.innerHTML=computerScore;
	result_div.innerHTML=convertToWord(computer_choice)+" beats "+convertToWord(user_choice) + ". User Lost!!";
}


function draw(){
	result_div.innerHTML="No one wins. Game Draw!!";
}

function computerChoice(){
	var choice=['s','w','g'];
	const comp_choice=Math.floor(Math.random()*3);
	return choice[comp_choice];
}
function game(user_choice){
   var computer_choice=computerChoice();
   switch(user_choice + computer_choice)
   {
   	case "sw":
   	case "gs":
   	case "wg":
   	  win(user_choice,computer_choice);
   	  break;
   	case "ws":
   	case "sg":
   	case "gw":
   	  lose(user_choice,computer_choice);
   	  break;
   	case "ss":
   	case "ww":
   	case "gg":
   	  draw();
   	  break;   
   }
}
function main(){
   snake.addEventListener('click' ,function(){
   	game("s");
   })

   water.addEventListener('click' ,function(){
   	game("w");
   })

   gun.addEventListener('click' ,function(){
   	game("g");
   })

}

main();