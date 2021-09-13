var lastX, lastY;
color = "black";
width_of_line = 1;
radius = 40;
var mouseEvent = "empty";

var canvas = document.getElementById("myCanvas").value;
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("colorv").value;
    width_of_line = document.getElementById("width_of_linev").value;
    radius = document.getElementById("radiusv").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    
    if(mouseEvent == "mousedown"){

        console.log("Current position of x and y coordinates = ");
        console.log("x =" + currentX + " - y =" + currentY);
        ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = width_of_line;
        ctx.arc(currentX, currentY, radius , 0, 2 * Math.PI);
        ctx.stroke();
    }

    lastX = currentX;
    lastY = currentY;
}
