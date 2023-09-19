/* clear the codepen console */
console.clear();

// helper function so that enemies are loaded in randomly
function rand(obj) {
  var result;
  var count = 0;
  for (var prop in obj) {
  if (Math.random() < 1 / ++count)
  result = prop;
  }
  return result;
}

var currentContext = 'action';
var actionIndex = 0;
var itemIndex = 0;
var actIndex = 0;
var maxIndex = 3;
var dialog = '';
// Not working
var actionSelector = document.querySelectorAll('#cum');
var itemSelector = document.querySelectorAll('#balls');
var heartSpeed = 30;
// var Mousetrap = 0;

/* audio vars */
// var menuMove = new Audio('move.mp3');
// var menuSelect = new Audio('select.mp3');

/* enemies */
var enemies = {
  "Temmie":{
    "name": "Temmie",
    "sprite":"https://res.cloudinary.com/daniel-griffiths/image/upload/v1473626874/temmie_nss3il.gif",
    "music":"https://www.youtube.com/embed/JRU6GnETSN4?autoplay=1&version=3&loop=1&rel=0&showinfo=0&autohide=1&playlist=JRU6GnETSN4&vq=tiny",
    "dialog":"Special enemy Temmi appears here to defeat you!!",
    "gold":"150",
    "act-options":["Flex","Feed Flakes","Talk"],
    "act-response":["Temmi looks nervous","emep","rerm","i hate minorities"]
  },  
  "Sans":{
    "name": "Sans",
    "sprite":"https://res.cloudinary.com/daniel-griffiths/image/upload/v1473626872/sans_kckyu7.gif",
    "music":"https://www.youtube.com/embed/B2jVbSI9H4o?autoplay=1&version=3&loop=1&rel=0&showinfo=0&autohide=1&playlist=B2jVbSI9H4o&vq=tiny",
    "dialog":"You’re Gonna Have a Bad Time",
    "gold":"150",
    "act-options":["Check for worms", "Ask for GitHub"],
    "act-response":["Sans looks insulted", "Sans offers his QR Code"]
  },  
  "Papyrus":{
    "name": "Papyrus",
    "sprite":"https://res.cloudinary.com/daniel-griffiths/image/upload/v1473626873/papyrus_fk7omx.png",
    "music":"https://www.youtube.com/embed/mqzBv3FYpr0?autoplay=1&version=3&loop=1&rel=0&showinfo=0&autohide=1&playlist=mqzBv3FYpr0&vq=tiny",
    "dialog":"Papyrus blocks the way!",
    "gold":"150",
    "act-options":["Check","Flirt","Insult"],
    "act-response":["Papyrus is looking at TikTok","Papyrus blushes","Papyrus blows you a kiss"]
  },  
  "Undyne":{
    "name": "Undyne",
    "sprite":"https://res.cloudinary.com/daniel-griffiths/image/upload/v1473626870/undyne_sy9laq.gif",
    "music":"https://www.youtube.com/embed/YTy9v9a7Tmo?autoplay=1&version=3&loop=1&rel=0&showinfo=0&autohide=1&playlist=YTy9v9a7Tmo&vq=tiny",
    "dialog":"Undyne prepares for battle!",
    "gold":"150",
    "act-options":["Check","Talk","Rizz up"],
    "act-response":["Undyne sharpens her spear ","Hey.","Undyne looks perturbed."]
  }, 
  "Muffet":{
    "name": "Muffet",
    "sprite":"https://res.cloudinary.com/daniel-griffiths/image/upload/v1473626876/muffet_mgre2y.gif",
    "music":"https://www.youtube.com/embed/qgFkG80INO0?autoplay=1&version=3&loop=1&rel=0&showinfo=0&autohide=1&playlist=qgFkG80INO0&vq=tiny",
    "dialog":"The spiders clap to the music.",
    "gold":"0",
    "act-options":["Check","Struggle","Pay 40g"],
    "act-response":["You just got a little stickier","two","three"]
  }, 
}

var randomEnemy = rand(enemies);

/* 
|---------------------------------------
| when the game loads
|--------------------------------------- 
*/

document.addEventListener("DOMContentLoaded", function() {

  // starts off the first action selector as active
  actionSelector[actionIndex].classList.add('active')
  itemSelector[itemIndex].classList.add('active')
  
  // loads in the enemy , with a different character every single time
  function loadEnemy(enemies,randomEnemy) {
    var sprite = enemies[randomEnemy]['sprite'];
    music = enemies[randomEnemy]['music'];
    gold = enemies[randomEnemy]['gold'];
    dialog = enemies[randomEnemy]['dialog'];
    enemyname = enemies[randomEnemy]['name'];
    

      //for each act options
      var menuAct = document.querySelector('.menu-act');
      if (menuAct) {
        enemies[randomEnemy]['act-options'].forEach(function (value) {
          menuAct.insertAdjacentHTML('beforeend', '<li class="menu-option" id="piss">* ' + value + '</li>');
        });
      }
      
    document.querySelector('.undertale').classList.add(randomEnemy);
    document.querySelector('.enemy img').setAttribute('src', sprite);
    
  }
  
  loadEnemy(enemies,randomEnemy);

  var actSelector = document.querySelectorAll('#piss');
  actSelector[actIndex].classList.add('active');
  
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
function prevAction(){
  if(actionIndex > 0 && currentContext == 'action'){
    actionSelector[actionIndex].classList.remove('active');
    actionIndex--;
    actionSelector[actionIndex].classList.add('active')
  }
}

/* move right */
function nextAction(){
  if(actionIndex < maxIndex && currentContext == 'action'){
    actionSelector[actionIndex].classList.remove('active');
    actionIndex++;
    actionSelector[actionIndex].classList.add('active');
  }
}

/* move up and down within the item menu  */
function nextItem(){
  var itemSelector = document.querySelectorAll('#balls');
  if(itemIndex < 1) {
    itemSelector[itemIndex].classList.remove('active');
    itemIndex++;
    itemSelector[itemIndex].classList.add('active');
  }
}

function prevItem(){
  var itemSelector = document.querySelectorAll('#balls');
  if(itemIndex > 0) {
    itemSelector[itemIndex].classList.remove('active');
    itemIndex--;
    itemSelector[itemIndex].classList.add('active');
  }
}

/* move up and down within the act menu */
function nextAct(){
  if(actIndex < (actSelector.length - 1)) {
    actSelector[actIndex].classList.remove('active');
    actIndex++;
    actSelector[actIndex].classList.add('active');
  }
}

function prevAct(){
  if(actIndex > 0) {
    actSelector[actIndex].classList.remove('active');
    actIndex--;
    actSelector[actIndex].classList.add('active');
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
  
  //manually putting when it resets because otherwise u dont even see anything other than the restart dialogue
  setTimeout(function(){
    window.location.reload();
 }, 3000);

}

/* 
|---------------------------------------
| entering to confirm-
when  "enter" key is pressed,  code checks the current context of the game 
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
  if(currentContext === 'action'){
    currentContext = actionSelector[actionIndex].getAttribute('data-context');
    document.querySelector('.menu-' + currentContext).style.display = 'block'; 

    const actionOption = document.querySelector('.action-option-' + actionIndex);
    if (actionOption) {
      actionOption.classList.remove('active');
    } else {
      console.error('Could not find element with class "action-option-' + actionIndex + '"');
    }

    return;
  }

  /*
  FIGHT TODO:
  - make sure menu is navigatable after fight sequence (reset action index)
  - put in fight animations ( basically hardcode )
  -fix moving bar..... somehow
  - should increment hp in some way
   */


  /* choosing to fight */
  if(currentContext == 'fight'){

      /* animate the attack line */
      const attackLine = document.querySelector('.attack-line');

      attackLine.animate([
        {left: '0'},
        {left: '97%'}
      ], {
        duration: 1000,
        fill: 'forwards'
      });
      
      /* reset attack line position */
      document.querySelector('.attack-line').removeAttribute("style");
    
      /* now that attack has been completed , it is the enemies turn inser animation */
      document.querySelector('.menu-fight').style.display = 'none';
      document.querySelector('.menu-fight-enemy-turn').style.display = 'block';
      document.querySelector('.menu-fight-enemy-turn').classList.add('menu-tall');
      
      currentContext = 'fight-enemy-turn';
    
      /* reset heart position */
      document.querySelector('.battle-heart').removeAttribute("style");

      /* testing testing */
      //call in enemy thingy

      // add space for fight animation
		  var canvas = document.getElementById("fightbounce");
		  var ctx = canvas.getContext("2d");

      // Load the heart image
      if(enemyname === "Temmie"){
        var img = new Image();
        img.src = "/js-final/paw.png";
      }
      else if(enemyname === "Sans"){
        var img = new Image();
        img.src = "/js-final/bone2.png";
      }
      else if(enemyname === "Papyrus"){
        var img = new Image();
        img.src = "/js-final/bone1.png";
      }
      else if(enemyname === "Undyne"){
        var img = new Image();
        img.src = "/js-final/bubb.png";
      }
      else if(enemyname === "Muffet"){
        var img = new Image();
        img.src = "/js-final/spyda.png";
      }

		// Set the initial position and velocity of the items
		var item1 = { x: 100, y: 100, vx: 2, vy: 3, r: 10 };
		var item2 = { x: 200, y: 200, vx: -2, vy: -3, r: 10 };

		// Draw the items on the canvas
		function draw() {
			// Clear the canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw item1
			ctx.drawImage(img, item1.x - item1.r, item1.y - item1.r, item1.r * 2, item1.r * 2);

			// Draw item2
			// ctx.drawImage(img, item2.x - item2.r, item2.y - item2.r, item2.r * 2, item2.r * 2);

			// Move the items
			item1.x += item1.vx;
			item1.y += item1.vy;
			item2.x += item2.vx;
			item2.y += item2.vy;

			// Bounce the items off the walls
			if (item1.x + item1.r > canvas.width || item1.x - item1.r < 0) {
				item1.vx = -item1.vx;
			}
			if (item1.y + item1.r > canvas.height || item1.y - item1.r < 0) {
				item1.vy = -item1.vy;
			}
			if (item2.x + item2.r > canvas.width || item2.x - item2.r < 0) {
				item2.vx = -item2.vx;
			}
			if (item2.y + item2.r > canvas.height || item2.y - item2.r < 0) {
				item2.vy = -item2.vy;
			}
		}

		// Call the draw function every 10 milliseconds
		setInterval(draw, 10);
    
    // WRITE CODE HERE WHEN I FIGURE HOW THE FUCK TO IDENTIFY IF IT COLLIDES


      /* just a placeholder, hide the battle screen after 3 seconds */
      setTimeout(function(){
        document.querySelector('.menu-fight-enemy-turn').style.display = 'none';
        document.querySelector('.menu-fight-enemy-turn').classList.remove('menu-tall');
        var menu = document.querySelector('.menu-' + currentContext);
        menu.style.display = 'none';
        actionSelector[actionIndex].classList.add('active');
        currentContext = 'action';
      }, 6000);

      return

    }

  /*
  ACT TODO:
    - be able to select options
    - when option selected text appear.
   */
  if(currentContext == 'act'){
    
    console.log(enemies[randomEnemy]['act-response'][actIndex])
    var menuAct = document.querySelector('.menu-act')
    menuAct.style.opacity = 0

    return

  }

  /* ITEM TODO:
  - item increases hp counter 10p
  */    
  if(currentContext == 'item'){
    document.querySelector('.hp-min').textContent = parseInt(document.querySelector('.hp-min').textContent) + 10
    // code below gets back to menu
    var menu = document.querySelector('.menu-' + currentContext);
    menu.style.display = 'none';
    actionSelector[actionIndex].classList.add('active');
    currentContext = 'action';
  }

  /* MERCY TODO:
  - when selected gives message 
  */
  if(currentContext == 'mercy'){
    document.querySelector('.enemy').style.opacity = '0.3';
    // document.querySelector('.audio').remove();
    document.querySelector('.menu-mercy').style.color = 'white';
    
    /* play sound effect */
    // var audio = new Audio('/img/spare.mp3');
    // audio.play();
    
    /* show spare dialog  */ 
    var spareDialog = '* YOU WON! <br>* You earned 0 XP and 0 gold.';
    
    // var typed = new typed('.menu-mercy', {
    //     strings: [spareDialog], 
    //     showCursor: false, 
    //     cursorChar: '', 
    //     typeSpeed: 20,
    //     loop: false,
    //     loopCount: false,
    // });  
    
    /* force img to stay on the first frame */
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
    actionSelector[actionIndex].classList.add('active');
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
    if(currentContext == 'item') {
      nextItem()
    }
    if(currentContext == 'act') {
      nextAct()
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
    if(currentContext == 'item') {
      prevItem()
    }
    if(currentContext == 'act') {
      prevAct()
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