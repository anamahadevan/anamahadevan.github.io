// javascript for site functions! 
console.log(" reading into the file");
/* 
future function goals:
- code so that when we scroll to a certain position 
or past a certain

- button to download official cv , maybe a preview to click to dowload

- 

*/

/*------ HORIZONTAL SCROLL -------*/

//calls in all elements for main-wrapper
const scrollcontainer = document.querySelector(".main-wrapper"); // doesn't change

function horizontal_scroll(event){
    console.log("function working")
    event.preventDefault();// does
    scrollcontainer.scrollLeft += event.deltaY; //deltaY for horizontal
}

//calls in 'wheel' event name  
scrollcontainer.addEventListener("wheel", horizontal_scroll);

