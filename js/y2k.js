
//bubble cursor
    var b = document.body;
    var imgurl = "https://i.imgur.com/hgX29BX.gif";
    var size = [10, 20];
    function rand(min, max)
    {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function getSize()
    {
    return rand(size[0], size[1]);
    }
    function lerp(a,b,f)
    {
    return (b-a)*f+a;
    }
    function heart(x,y)
    {
    var s = getSize();
    x -= s/2;
    y -= s/2;
    x = Math.floor(x) + rand(-5, 5);
    y = Math.floor(y) + rand(-5, 5);
    var fx = x + rand(-40, 40);
    var fy = y + rand(-40, 40);
    var i = document.createElement("img");
    i.src = imgurl;
    i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${x}px; top: ${y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
    b.appendChild(i);
    var f = 0;
    var interval;
    interval = setInterval(function() {
    var _x = Math.floor(lerp(x, fx, f));
    var _y = Math.floor(lerp(y, fy, f));
    i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${_x}px; top: ${_y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
    i.style.opacity = 1-f;
    f += 0.01;
    if (f > 1)
    {
    clearInterval(interval);
    b.removeChild(i);
    }
    }, 10);
    }
    function bro(x,y)
    {
    for (var i = 0; i < 5; i++)
    {
    heart(x,y);
    }
    }
    b.addEventListener("click", function(event){
    var x = event.clientX;
    var y = event.clientY;
    bro(x,y);
    });


//     <script type="text/javascript">
// marqueeInit({
// 	uniqueid: 'mycrawler',
// 	style: {
// 		'padding': '0px',
// 		'width': '1000px',
// 		'background': '#ffeff9',
// 		'border':'2px inset #ffddec',
// 		'color':'#ff89bc',
// 		'text-shadow': '-0.5px 0 #ff70ae, 0 0.5px #ff70ae, 0.5px 0 #ff70ae, 0 -0.5px #ff70ae'
// 	},
// 	inc: 4, //speed - pixel increment for each iteration of this marquee's movement
// 	mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
// 	moveatleast: 2,
// 	neutral: 150,
// 	persist: false,
// 	savedirection: true
// });
// </script>


{/* <script>
var myVar = setInterval(function() {
  myTimer();
}, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
</script> */}