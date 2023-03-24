const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const photo_arr = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */

const photo_txt = ["pic 1","pic 1","pic 1","pic 1","pic 1"];

/* Looping through images */

for(let i =0;i<=5;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', photo_arr[i]);
    newImage.setAttribute('alt', photo_txt[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',clck);
}

clck(){
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
}




    



/* Add click event listeners to thumb bar */
// thumbBar.addEventListener("click", myFunction); 

/* Wiring up the Darken/Lighten button */

darken(){
    
}

