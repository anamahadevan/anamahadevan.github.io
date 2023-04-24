// var userHP = 100;
// var opHP = 100;
// opAttacks = [flameThrower, dragonClaw, ember, growl];
// playerMove = 0;

/* users moves */
function volumeincr() {
  document.getElementById('message').innerHTML = " sylveon increased volume! ";
  updatehealth(10);
}

function waterPulse() {
  document.getElementById('message').innerHTML = " sylveon missed! <br> volume decreased "
  updatehealth(-10);
}

function surf() {
  document.getElementById('message').innerHTML = " sylveon just pounded your mom! "
  updatehealth(-5);
}

function curbstomp() {
  document.getElementById('message').innerHTML = " erereree rawr "
  updatehealth(30);
}



// Get the health bar progress element
let healthBarProgress = document.getElementById('health-bar-progress');
let total_health = 0;

function updatehealth(health){
  total_health += health;

  console.log("health:"+health);
  console.log("total health:"+total_health);
  // healthBarProgress.width = health;
  if(health){
    document.getElementById("health-bar-progress").style.width = total_health + '%';
  }

}

updatehealth(0); // call function







// /* opponent's moves */

// function flameThrower() {
//   var miss = Math.floor((Math.random() * 10) + 1); // miss rate
//   if(miss == 1 ) {
//   document.getElementById('message').innerHTML = " anthony's attack missed! " // attack missed
//   }
//   else {
//   document.getElementById('message').innerHTML = " anthony used flame thrower " // attack
//     var critical = Math.floor((Math.random() * 10) + 1); // critical
//       if(critical == 4){
//         for(var x = 0; x < 2; x++){ // yes critical
//           userHP = userHP - 30;
//         }
//       }
//       else{
//         userHP = userHP - 30; // no critical
//       }
//   if(userHP < 0) { userHP = 0} // faint
//   document.getElementById('myHP').innerHTML = userHP; // update hp
//     if(userHP == 0) { // fainted
//       document.getElementById('message').innerHTML = " volume at zero! " // fainted
//     }
//   }

// updatehealth();
// }

// function dragonClaw() {
//   var miss = Math.floor((Math.random() * 10) + 1);
//   if(miss == 1 ) {
//     document.getElementById('message').innerHTML = " anthony's attack missed! "
//   }
//   else {
//   document.getElementById('message').innerHTML = " anthony used dragon claw "
//   var critical = Math.floor((Math.random() * 10) + 1);
//     if(critical == 4){
//       for(var x = 0; x < 2; x++){
//         userHP = userHP - 20;
//       }
//     }
//     else{
//       userHP = userHP - 20;
//     }
//   if(userHP < 0) { userHP = 0}
//   document.getElementById('myHP').innerHTML = userHP;
//     if(userHP == 0){
//       document.getElementById('message').innerHTML = " sylveon fainted! "
//     }
//   }

// updatehealth();
// }

// function ember() {
//   var miss = Math.floor((Math.random() * 10) + 1);
//   if(miss == 1 ) {
//     document.getElementById('message').innerHTML = " anthony's attack missed! "
//   }
//   else {
//   document.getElementById('message').innerHTML = " anthony used ember "
//   var critical = Math.floor((Math.random() * 10) + 1);
//     if(critical == 4){
//       for(var x = 0; x < 2; x++){
//         userHP = userHP - 10;
//       }
//     }
//     else{
//       userHP = userHP - 10;
//     }
//   if(userHP < 0) { userHP = 0}
//   document.getElementById('myHP').innerHTML = userHP;
//     if(userHP == 0){
//       document.getElementById('message').innerHTML = " sylveon fainted! "
//     }
//   }

// updatehealth();
// }

// function growl() {
//   var miss = Math.floor((Math.random() * 10) + 1);
//   if(miss == 1 ) {
//     document.getElementById('message').innerHTML = " anthony's attack missed! "
//   }
//   else {
//   document.getElementById('message').innerHTML = " anthony used growl "
//   var critical = Math.floor((Math.random() * 10) + 1);
//     if(critical == 4){
//       for(var x = 0; x < 2; x++){
//         userHP = userHP - 5;
//       }
//     }
//     else{
//       userHP = userHP - 5;
//     }
//   if(userHP < 0) { userHP = 0}
//   document.getElementById('myHP').innerHTML = userHP;
//     if(userHP == 0){
//       document.getElementById('message').innerHTML = " sylveon fainted! "
//     }
//   }

// updatehealth();
// }



// function compPokemon() { // continue
//   if(playerMove == 1 && opHP != 0) { // whos move
//   var move = Math.floor((Math.random() * 4) + 1); // choose move randomly
//     opAttacks[move](); // call attack from array
//     playerMove = 0; // update player move
//     updateHealthBar();
//   }
// }

////////// ACTUAL VOLUME CONTROLS /////////////////


// // Set the initial health value to 100
// let health = 90;

// // Function to update the health bar
// function updateHealthBar() {
//   // Set the width of the progress bar based on the health value
//  
  
//   // If the health is less than or equal to 0, end the game
//   if (userHP = 10) {
  
//   }
// }

// // Call the updateHealthBar function to initialize the health bar
// updateHealthBar();

// // Example code to decrease the health by 10% when the player is hit
// health -= 10;
// updateHealthBar();
