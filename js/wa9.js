//set initial variables for name, randomizing elements, printing story
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

//selects random value from array 
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//base story
var storyText =
  "It was a juicy and crisp 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they were mildly perturbed for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// who went for a walk
var insertX = ["Ana", "BMO", "Jerma"];

// where they're going
var insertY = ["Radio 1190", "The UMC", "upper RiNo"];

//what happened
var insertZ = ["suspiciously exploded", " cursed on air and got banned by the FCC", "got hatecrimed"];

//call randomize when user clicks
randomize.addEventListener('click', result);

//function for printing result
function result() {
  var newStory = storyText;
  
  //assign items random value from array
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  //replace blanks w random inserts
  var newStory = newStory.replace(':insertx:', xItem);
  //occurs twice so must be called twice
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':inserty:', yItem);
  var newStory = newStory.replace(':insertz:', zItem);
 
  if (customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if (document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714286) + ' stone';
    var temperature = Math.round((94 - 32) * (5/9)) + ' centigrade';
    var newStory = newStory.replace('94 farenheit', temperature);
    var newStory = newStory.replace('300 pounds', weight);

  }

 //prints story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}