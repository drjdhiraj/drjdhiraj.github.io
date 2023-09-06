var i;
i = Math.floor(6*Math.random())+1;
document.write(i);


var source1 = "dice" + i + ".png";

var imgElement = document.querySelector(".img1");
imgElement.src = source1;


var j = Math.floor(6*Math.random())+1;


var source2 = "dice" + j + ".png";
var pic2 = document.querySelector(".img2");



pic2.src = source2;
var h1 = document.getElementsByTagName("h1");

if(i>j){
    h1[0].textContent = "player 1 won";
}
else if(i<j){
    h1[0].textContent = "player 2 won";
}
else{
    h1[0].textContent = "Dhiraj Won";
}
