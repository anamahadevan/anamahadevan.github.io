
// bubble cursor

const body = document.body;
const cursorsrc = "/img/y2k/bubblecursor.gif";
const sizerange = [10, 20];

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getSize() {
    return rand(sizerange[0], sizerange[1]);
}

function createHeart(x, y, size) {
    const heartElement = document.createElement("img");
    heartElement.src = cursorsrc;
    heartElement.style.cssText = `pointer-events: none; position: fixed; width: ${size}px; left: ${x}px; top: ${y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
    body.appendChild(heartElement);
    return heartElement;
}

function animateHeart(heartElement, startX, startY, endX, endY) {
    console.log("here1")
    gsap.to(heartElement, {
        x: endX,
        y: endY,
        opacity: 0,
        duration: 5,
        onComplete: () => {
            body.removeChild(heartElement);
        }
    });
}

function createHearts(x, y, count) {
    for (let i = 0; i < count; i++) {
        const size = getSize();
        const heartElement = createHeart(x - size / 2, y - size / 2, size);
        const endX = x + rand(-40, 40);
        const endY = y + rand(-40, 40);
        animateHeart(heartElement, x, y, endX, endY);
    }
}

body.addEventListener("click", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    createHearts(x, y, 5);
});

///////// clock! /////////////

function updateClock() {
    const d = new Date();
    document.getElementById("clock").textContent = d.toLocaleTimeString();
}

// constantly updates clock
const intervalId = setInterval(updateClock, 1000);

//////// scroll animation  ////////////

const marqueeElement = document.getElementById('crawl-inner');
const marqueeWidth = 1000;
const marqueeSpeed = 0.2; // speed of marquee scrolling

gsap.to(marqueeElement, {
    x: -marqueeWidth,
    ease: "none",
    repeat: -1,
    modifiers: {
        x: function(x) {
            return (x < -marqueeWidth) ? marqueeWidth : x;
        }
    },
    scrollTrigger: {
        trigger: marqueeElement,
        start: "left bottom",
        scrub: true
    }
});




// making elements draggable here 

Draggable.create("#digiwindow");