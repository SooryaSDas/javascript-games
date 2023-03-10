 'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "correct number";

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 13;
const srtnumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

let displaymsg = function (message) {
    document.querySelector('.message').textContent = message;
  }

document.querySelector('.check').addEventListener('click',function(){
   const guess =  Number(document.querySelector('.guess').value);
    console.log(guess)

    if(!guess){
        displaymsg("Not a number")
        // document.querySelector('.message').textContent = "Not a number";
    }
    else if(guess == srtnumber){
        displaymsg("yessss it's correct...")
        // document.querySelector('.message').textContent = "yessss it's correct...";
        document.querySelector('.number').textContent = srtnumber;
        document.querySelector('body').style.backgroundColor = "#60b347";

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        }

    }

    else if(guess !== srtnumber){
        if(score > 1){
            displaymsg(guess>srtnumber ? "it's too higher " : "too shorter");
            // document.querySelector('.message').textContent = guess > srtnumber ? "it's too higher " : "too shorter" ;
            score--;
            document.querySelector('.score').textContent = score;
            
        }
        else{
            displaymsg("you just lost the game")
            // document.querySelector('message').textContent = "you just lost the game";
            document.querySelector('.score').textContent = 0;

        }
    }
})


//     else if(guess > srtnumber){
//         if(score > 1){
//             document.querySelector('.message').textContent = "it's too higher ";
//             score--;
//             document.querySelector('.score').textContent = score;
            
//         }
//         else{
//             document.querySelector('message').textContent = "you just lost the game";
//             document.querySelector('.score').textContent = 0;

//         }
       
//     }
//     else if(guess < srtnumber){
//         if(score > 1){
//             document.querySelector('.message').textContent = "too shorter";
//             score--;
//              document.querySelector('.score').textContent = score;
            
//         }
//         else{
//             document.querySelector('.message').textContent = "you just lost the game";
//             document.querySelector('.score').textContent = 0;

//         }
       
//     }
// })

document.querySelector('.again').addEventListener('click',function () {
   score = 20;
   const srtnumber = Math.trunc(Math.random()*20) + 1;

   displaymsg("Start guessing...")
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
  })