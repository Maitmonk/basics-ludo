
//for dice 1
var x1 = Math.floor((Math.random() * 6) + 1);
var randomimgnum1="dice"+x1+".png";
var randomimgsrc1="images/"+randomimgnum1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimgsrc1);

//for dice 2
  var x2=Math.floor((Math.random() * 6) + 1);
  var randomimgnum2="dice"+x2+".png";
  var randomimgsrc2="images/"+randomimgnum2;
  var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimgsrc2);
if(x1>x2){
    document.querySelector("h1").innerHTML="Player 1 win";
}
else if(x1===x2){
    document.querySelector("h1").innerHTML="Go NEXT ROUND";
}
else{
    document.querySelector("h1").innerHTML="Player 2 win";
}

