
  // get references to elements in the DOM
  const box = document.getElementById('box');
  const cat = document.getElementById('cat');
  const colorbutton = document.getElementById('colorbutton');

  // function to change the background color of the box
  function changeColor() {
      const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
      const randomcolor = colors[Math.floor(Math.random() * colors.length)];
      box.style.backgroundColor = randomcolor;
      cat.style.backgroundColor = randomcolor;
  }

  // function to change the text inside the box
  function changeText() {
      if (box.textContent === 'touch me') {
          box.textContent = 'ooh!';
      } else {
          box.textContent = 'touch me';
      }
  }

  // event listener to change text when click color box
  box.addEventListener('click', changeText);
  //event listener to change color when click button
  colorbutton.addEventListener('click', changeColor);