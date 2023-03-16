 
 
 // BUTTON CHANGE COLOR
let btn = document.querySelector("#button2")

 function changeBtn(){
     btn.textContent("TEST");
     btn.style.backgroundColor="darkmagenta";
     btn.style.border="2px solid magenta";
     btn.style.color = "white";
 }

 btn.addEventListener('click',changeBtn);


 
 // GAME
 var y = Math.floor(Math.random() * 10 + 1);
 var guess = 1;

 document.getElementById("submitguess").onclick = function()
 {
   // number guessed by user    
     var x = document.getElementById("guessField").value;

     if(x == y)
     {    
       alert("congrats dawg you got it ");
     }
     else if(x < y) /* guess less than*/
     {    
       guess++;
       alert("L + RATIO nerd go higher !");
     }
     else
     {
       guess++;
       alert("you're baaaad go lower")
     }
 }