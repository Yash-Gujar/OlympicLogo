canvas = document.getElementById("myCanvas");
color="blue";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth= 5;
ctx.arc(300, 270 , 40 ,0 , 2 *Math.PI);
ctx.stroke();

canvas = document.getElementById("myCanvas");
color="black";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth= 5;
ctx.arc(400, 270 , 40 ,0 , 2 *Math.PI);
ctx.stroke();

canvas = document.getElementById("myCanvas");
color="red";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth= 5;
ctx.arc(500, 270 , 40 ,0 , 2 *Math.PI);
ctx.stroke();

canvas = document.getElementById("myCanvas");
color="yellow";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth= 5;
ctx.arc(350, 315 , 40 ,0 , 2 *Math.PI);
ctx.stroke();

canvas = document.getElementById("myCanvas");
color="green";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth= 5;
ctx.arc(450, 315 , 40 ,0 , 2 *Math.PI);
ctx.stroke();
