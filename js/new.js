// javascript for site functions! 
console.log(" reading into the file");


/*------ HORIZONTAL SCROLL -------*/

//calls in all elements for main-wrapper
const scrollcontainer = document.querySelector(".main-wrapper"); // doesn't change

function horizontal_scroll(event){
    console.log("function working")
    event.preventDefault();// does
    scrollcontainer.scrollLeft += event.deltaY; //
}

//calls in 'wheel' event name  
scrollcontainer.addEventListener("wheel", horizontal_scroll);

