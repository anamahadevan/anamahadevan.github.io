/* clear the codepen console */
console.clear();

var currentContext = 'action';
var actionIndex = 1;
var menuIndex = 1;
var maxIndex = 4;
var dialog = '';
var actionSelector = document.querySelectorAll('.action-option');
var heartSpeed = 30;
// var Mousetrap = 0;

/* audio vars */
// var menuMove = new Audio('move.mp3');
// var menuSelect = new Audio('select.mp3');

/* enemies */
var enemies = {
  "Temmie":{
    "sprite":"https://res.cloudinary.com/daniel-griffiths/image/upload/v1473626874/temmie_nss3il.gif",
    "music":"https://www.youtube.com/embed/JRU6GnETSN4?autoplay=1&version=3&loop=1&rel=0&showinfo=0&autohide=1&playlist=JRU6GnETSN4&vq=tiny",
    "dialog":"Special enemy Temmi appears here to defeat you!!",
    "gold":"150",
    "act-options":["Check","Flex","Feed Flakes","Talk"]
  },  
  "Sans":{
    "sprite":"https://res.cloudinary.com/daniel-griffiths/image/upload/v1473626872/sans_kckyu7.gif",
    "music":"https://www.youtube.com/embed/B2jVbSI9H4o?autoplay=1&version=3&loop=1&rel=0&showinfo=0&autohide=1&playlist=B2jVbSI9H4o&vq=tiny",
    "dialog":"You’re Gonna Have a Bad Time",
    "gold":"150",
    "act-options":["Check"]
  },  
  "Papyrus":{
    "sprite":"https://res.cloudinary.com/daniel-griffiths/image/upload/v1473626873/papyrus_fk7omx.png",
    "music":"https://www.youtube.com/embed/mqzBv3FYpr0?autoplay=1&version=3&loop=1&rel=0&showinfo=0&autohide=1&playlist=mqzBv3FYpr0&vq=tiny",
    "dialog":"Papyrus blocks the way!",
    "gold":"150",
    "act-options":["Check","Flirt","Insult"]
  },  
  "Undyne":{
    "sprite":"https://res.cloudinary.com/daniel-griffiths/image/upload/v1473626870/undyne_sy9laq.gif",
    "music":"https://www.youtube.com/embed/YTy9v9a7Tmo?autoplay=1&version=3&loop=1&rel=0&showinfo=0&autohide=1&playlist=YTy9v9a7Tmo&vq=tiny",
    "dialog":"Undyne prepares for battle!",
    "gold":"150",
    "act-options":["Check","Talk"]
  }, 
  "Asgore":{
    "sprite":"https://res.cloudinary.com/daniel-griffiths/image/upload/v1473626876/asgore_rfa9nv.gif",
    "music":"https://www.youtube.com/embed/pcamjcoRmrQ?autoplay=1&version=3&loop=1&rel=0&showinfo=0&autohide=1&playlist=pcamjcoRmrQ&vq=tiny",
    "dialog":"(A strange light fills the room. )",
    "gold":"150",
    "act-options":["Check","Talk"]
  },  
  "Muffet":{
    "sprite":"https://res.cloudinary.com/daniel-griffiths/image/upload/v1473626876/muffet_mgre2y.gif",
    "music":"https://www.youtube.com/embed/qgFkG80INO0?autoplay=1&version=3&loop=1&rel=0&showinfo=0&autohide=1&playlist=qgFkG80INO0&vq=tiny",
    "dialog":"The spiders clap to the music.",
    "gold":"0",
    "act-options":["Check","Struggle","Pay 40g"]
  }, 
}

/* 
|---------------------------------------
| On load
|--------------------------------------- 
*/

document.addEventListener("DOMContentLoaded", function() {
  function rand(obj) {
  var result;
  var count = 0;
  for (var prop in obj) {
  if (Math.random() < 1 / ++count)
  result = prop;
  }
  return result;
  }
  
  function loadEnemy(enemies) {
  var randomEnemy = rand(enemies);
  var sprite = enemies[randomEnemy]['sprite'];
  music = enemies[randomEnemy]['music'];
  gold = enemies[randomEnemy]['gold'];
  dialog = enemies[randomEnemy]['dialog'];
    
    /* Asgore is special ;) */
    if (randomEnemy == 'Asgore') {
      document.querySelector('.action-option:last-child').style.display = 'none';
      maxIndex = 3;
    }
    
    var menuAct = document.querySelector('.menu-act');
    if (menuAct) {
      enemies[randomEnemy]['act-options'].forEach(function (value) {
        menuAct.insertAdjacentHTML('beforeend', '<li class="menu-option">* ' + value + '</li>');
      });
    }
    
    document.querySelector('.undertale').classList.add(randomEnemy);
    document.querySelector('.enemy img').setAttribute('src', sprite);
    
  }
  
  loadEnemy(enemies);
  
  /* text animation function */
  var typedStrings = dialog.split('');
  var typedIndex = 0;
  
  function typeString() {
    var currentText = document.querySelector('.menu-dialog').textContent;
    var newText = currentText + typedStrings[typedIndex];
    document.querySelector('.menu-dialog').textContent = newText;
    typedIndex++;
    if (typedIndex < typedStrings.length) {
      setTimeout(typeString, 20);
    }
  }
  
  // typeString();
  
  
  typeString();
  
  /* scaling code source: http://stackoverflow.com/questions/18750769/scale-div-with-its-content-to-fit-window */
  
var maxWidth = document.body.clientWidth;
var maxHeight = document.body.clientHeight;

window.addEventListener('resize', function(evt) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var scale;

  scale = Math.min(width / maxWidth, height / maxHeight);

  var undertaleEl = document.querySelector('.undertale');
  undertaleEl.style.webkitTransform = 'scale(' + scale + ')';
  document.body.style.width = maxWidth * scale + 'px';
  document.body.style.height = maxHeight * scale + 'px';
});



/* 
|---------------------------------------
| Action Menu Functions
|--------------------------------------- 
|
| Used the navigate the bottom menu bar
|
*/
  
  /* move left */
function prevAction(actionMenuItem){
  if(actionIndex > 1 && currentContext == 'action'){
    actionIndex--;
    actionSelector.classList.remove('active');
    document.querySelector('.action-option-' + actionIndex).classList.add('active');
    console.log(actionIndex);
  }
}

/* move right */
function nextAction(actionMenuItem){
  if(actionIndex < maxIndex && currentContext == 'action'){
    actionIndex++;
    actionSelector.classList.remove('active');
    document.querySelector('.action-option-' + actionIndex).classList.add('active');
    console.log(actionIndex);
  }
}

/* move heart during battle */
function heartMove(direction,offset){
  var battleHeart = document.querySelector('.battle-heart');
  var heartPosition = parseInt(battleHeart.style[direction], 10) || 0;
  battleHeart.style[direction] = (heartPosition + parseInt(offset + heartSpeed, 10)) + "px";
}

/* show restart screen */
function showRestartDialog(){
  var restart = document.querySelector('.restart');
  restart.style.display = "block";
  restart.addEventListener('click', function() {
    window.location.href = "";
  });
}

/* 
|---------------------------------------
| BINDING ENTER BUTTON TO CONFIRM--
When the "enter" key is pressed, the code checks the current context of the game 
(which menu the player is currently on), and performs different actions based on 
the context.

For example, if the player is currently in the "fight" menu, the code animates 
the attack line, hides the "fight" menu, shows the "enemy turn" menu, and then 
hides the "enemy turn" menu after 3 seconds.

If the player is in the "mercy" menu and presses "enter", the game ends and shows
 a "you won" dialog with the amount of gold earned.

|--------------------------------------- 
*/

Mousetrap.bind('enter', function(){ 

  /* set the new content and show the relevant menu */
  if(currentContext == 'action'){
    currentContext = document.querySelector('.action-option-' + actionIndex).getAttribute('data-context');
    document.querySelector('.menu-' + currentContext).style.display = 'block'; 
    document.querySelector('.action-option-' + actionIndex).classList.remove('active');
    console.log(currentContext);
  }

  /* FIGHT */
  if(currentContext == 'fight'){

      /* animate the attack line */
      document.querySelector('.attack-line').animate([
        {left: '0'},
        {left: '97%'}
      ], {
        duration: 1000,
        fill: 'forwards'
      });
    
      /* reset attack line position */
      document.querySelector('.attack-line').removeAttribute("style");
    
      /* Its now the enemies turn! */
      document.querySelector('.menu-fight').style.display = 'none';
      document.querySelector('.menu-fight-enemy-turn').style.display = 'block';
      document.querySelector('.menu-fight-enemy-turn').classList.add('menu-tall');
      
      currentContext = 'fight-enemy-turn';
    
      /* reset heart position */
      document.querySelector('.battle-heart').removeAttribute("style");
    
      /* just a placeholder, hide the battle screen after 3 seconds */
      setTimeout(function(){
        document.querySelector('.menu-fight-enemy-turn').style.display = 'none';
        document.querySelector('.menu-fight-enemy-turn').classList.remove('menu-tall');
        document.querySelector('.action-option-' + actionIndex).classList.add('active');  
        currentContext = 'action';
      }, 3000);
    }

  /* ACT */
  if(currentContext == 'act'){

  }

  /* ITEM */    
  if(currentContext == 'item'){

  }

  /* MERCY */
  if(currentContext == 'mercy'){
    document.querySelector('.enemy').style.opacity = '0.3';
    document.querySelector('.audio').remove();
    document.querySelector('.menu-mercy').style.color = 'white';
    
    /* play sound effect */
    var audio = new Audio('http://danielgriffiths.me/project-files/undertale/spare.mp3');
    audio.play();
    
    /* show spare dialog  */ 
    var spareDialog = '* YOU WON! <br>* You earned 0 XP and ' + gold + ' gold.';
    
    var typed = new Typed('.menu-mercy', {
        strings: [spareDialog], 
        showCursor: false, 
        cursorChar: '', 
        typeSpeed: 20,
        loop: false,
        loopCount: false,
    });  
    
    /* force img to stay on the first frame (very hacky) */
    setInterval(function() {
      document.querySelector('.enemy img').setAttribute('src', document.querySelector('.enemy img').getAttribute('src'))
    },1)

    currentContext = 'battle-finished';
     
    showRestartDialog();

  } 
});


/* 
|---------------------------------------
| Cancel Button
|--------------------------------------- 
*/

Mousetrap.bind('esc', function() {
  /* get out of the sub menus */
  if(currentContext == 'act' || currentContext == 'item' || currentContext == 'mercy') {
    var menu = document.querySelector('.menu-' + currentContext);
    menu.style.display = 'none';
    var activeAction = document.querySelector('.action-option-' + actionIndex);
    activeAction.classList.add('active');
    currentContext = 'action';
  } 
});



/* 
|---------------------------------------
| Arrow Keys
|--------------------------------------- 
*/
  
  /* up key */
  Mousetrap.bind('up', function() {     
    if(currentContext == 'fight-enemy-turn'){
      heartMove('top','-');
    }
  });
  
  /* down key */
  Mousetrap.bind('down', function() {   
    if(currentContext == 'fight-enemy-turn'){
      heartMove('top','+');
    }
  });
  
  /* right key */
  Mousetrap.bind('right', function() { 
    if(currentContext == 'action'){
      nextAction(this);
    }
    
    if(currentContext == 'fight-enemy-turn'){
      heartMove('left','+');
    }
  });
  
  /* left key */
  Mousetrap.bind('left', function() { 
    if(currentContext == 'action'){
      prevAction(this);
    }
    
    if(currentContext == 'fight-enemy-turn'){
      heartMove('left','-');
    }
  }); 

  
  /* 
  |---------------------------------------
  | Audio Toggle
  |--------------------------------------- 
  */
  
  // $('.audio-toggle').click(function(){
  //   $('.audio').attr('src',music);
  //   $(this).fadeOut();
  // });

});