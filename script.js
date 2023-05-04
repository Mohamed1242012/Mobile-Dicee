var randNum1 = Math.floor(Math.random()*6+1) ;
var randNum2 = Math.floor(Math.random()*6+1) ;
var nameImg1 = "images/dice"+randNum1+".png" ;
var nameImg2 = "images/dice"+randNum2+".png" ;

var img1 = document.querySelector(".img1") ;
var img2 = document.querySelector(".img2") ;

img1.setAttribute("src",nameImg1) ;
img2.setAttribute("src",nameImg2) ;

if (randNum1 < randNum2) {
    document.querySelector("p").innerHTML = "🚩Player 2 Wins !" ;
}else if (randNum1 > randNum2) {
    document.querySelector("p").innerHTML = "🚩Player 1 Wins !" ;
}else{
    document.querySelector("p").innerHTML = "🚩Draw !" ;
}