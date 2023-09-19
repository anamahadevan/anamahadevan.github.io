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


