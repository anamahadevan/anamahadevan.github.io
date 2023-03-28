const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const photo_arr = ['images/pic1.jpg','images/pic2.jpg', 'images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];

/* Declaring the alternative text for each image file */

const photo_txt = ["pic 1","pic 1","pic 1","pic 1","pic 1"];

/* Looping through images */

for(let i =0;i<=4;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', photo_arr[i]);
    newImage.setAttribute('alt', photo_txt[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',clck);
}

function clck(e){
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
}


/* Add click event listeners to thumb bar */
// thumbBar.addEventListener("click", myFunction); 

/* Wiring up the Darken/Lighten button */

btn.onclick = function dark_light() {
    var btnClass = btn.getAttribute('class');
    if(btnClass === 'dark')  // make light
    {

      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 
    
    else if(btnClass === 'light') //make darj
    {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }
  
  