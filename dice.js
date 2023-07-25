var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSrc="./images/"+randomDiceImage;
document.querySelector(".img1").setAttribute("src", randomImageSrc);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImgSrc2="./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", randomImgSrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!!";

}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 wins!! ";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}