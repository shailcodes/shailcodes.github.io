// // Computer random number generate karega (1–100)

// // User guess karega

// // Output milega:

// // Too high

// // Too low

// // Correct 🎉


// const inputNum = document.querySelector(".inputbox input");
// const button1 = document.querySelector(".btn1");
// const button2 = document.querySelector(".btn2");
// const message = document.querySelector(".message");
// const mess = document.querySelector(".msg p1");
// const attempts = document.querySelector(".attempt");



// let compChoice = Math.floor(Math.random() *100) +1;
// console.log(compChoice);

// let count = 0;

// let maxAttempt = 5;
// let attempt = 0;
// const playGame = () => {
//     button1.addEventListener ("click" , () =>{
//         console.log("hi");





//         let userChoice = Number(inputNum.value);
//         console.log(userChoice);
        
//         count++;
//         mess.innerText = count;

        

        
       

//          if (inputNum.value !== "") {
//             attempt++;
//              attempts.innerText = attempt;
//              if (userChoice === compChoice){
          
//              message.innerText = "correct";
//              button1.disabled = true;

//         }
//            else if (attempt === maxAttempt){
               
//                 attempts.innerText = "Game over";
//                 button1.disabled = true;
//             }

//             else if (attempt === 4){
//                  attempts.innerText = "last chance: hint first n: 2";
//             }

//         }
     
    


      


        
//         else if  (userChoice > compChoice ) {
//             message.innerText = "Too high";
//             attempts.innerText=attempt++

//         }
//         else if (userChoice < compChoice) {
//               message.innerText = "Too low";
//         }
//     }

//          });


        


// setTimeout(playGame, 1000);

    
     

// button2.addEventListener ("click" , () =>{
        
//         inputNum.value = "";
//         message.innerText = "enter new no!";
//         button1.disabled = false;
//         compChoice = Math.floor(Math.random() *100) +1;
// console.log(compChoice);

//      });


const inputNum = document.querySelector(".inputbox input");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const message = document.querySelector(".message");
const mess = document.querySelector(".msg p1");
const attempts = document.querySelector(".attempt");
const winSound = new Audio("sound.mp3");


let compChoice = Math.floor(Math.random() * 100) + 1;

let maxAttempt = 5;
console.log(compChoice);
let attempt = 0;
const bgMusic = new Audio("music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.3;


button1.addEventListener("click", () => {

    if(bgMusic.paused){
   bgMusic.play();
}
    // 1️⃣ empty input check
    if (inputNum.value === "") {
        message.innerText = "Enter a number first";
        return;
    }

    let userChoice = Number(inputNum.value);

    // 2️⃣ attempt increase
    attempt++;
    attempts.innerText = "Attempts: " + attempt;

    // 3️⃣ WIN CONDITION
    if (userChoice === compChoice) {
        message.innerText = "🎉 Correct!";
        message.classList.add("win");
        winSound.play();
        launchConfetti();
        
        button1.disabled = true;
        return;
    }

    // 4️⃣ LAST ATTEMPT + WRONG
    if (attempt === maxAttempt) {
        message.innerText = "💀 Game Over! Number was " + compChoice;
        button1.disabled = true;
        return;
    }

    // 5️⃣ HINT SYSTEM
    if (userChoice > compChoice) {
        message.innerText = "Too High 📈";
    } else {
        message.innerText = "Too Low 📉";
    }

    // 6️⃣ LAST CHANCE WARNING
    if (attempt === maxAttempt - 1) {
        message.innerText += " ⚠ Last chance!";
    }

});


function launchConfetti(){
   const container = document.querySelector("#confetti-container");

   for(let i=0;i<80;i++){
      const piece = document.createElement("div");
      piece.classList.add("confetti");

      piece.style.left = Math.random()*100 + "vw";
      piece.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
      piece.style.animationDuration = (Math.random()*2+1)+"s";

      container.appendChild(piece);

      setTimeout(()=>piece.remove(),3000);
   }
}