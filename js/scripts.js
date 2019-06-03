function getResult(){
var hypotenuse= parseFloat(document.getElementById("side1").value);
var opposite = parseFloat(document.getElementById("side2").value);
var adjacent = parseFloat(document.getElementById("side3").value);
var determine = function(side1,side2, adjacent){
if (side1 === side2 && side2 === side3 && side1 === side3){
alert("Equilateral");
}

else if ((side1 === side2 && side2 === side3) (side1 != side3 && side2 !== side3));
alert("Isosceles");

}
determine();
if(side1 === side2 && side1 === side1 && side2 === side3){
alert("Equilateral");
}
else if(side1 === side2 || side1 === adjacent || side2 === side3){
alert("Isosceles");
}
else if((side1 + side2) <= adjacent || (side1 + side3) <=side2 || (side2 + side3) <= side1) {
alert("Not a definite triangle");
}
else{
alert("Scalene");
}
}
