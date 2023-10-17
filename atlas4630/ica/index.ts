let examvar = "Hello world";
console.log(examvar);

const para = document.querySelector('.hello');
const button = document.getElementById('button') as HTMLButtonElement;

button.disabled = true;
// cant disable paragraph because it doesnt exist for button element

button.addEventListener('click',(event)=>{
    console.log(event.target);
    console.log(event.clientX);
    console.log(event.clientY);
});

function myclickfunc(event: any){
    console.log(event.clientX); // would only work on mouse events 

}

window.addEventListener('click', myclickfunc);