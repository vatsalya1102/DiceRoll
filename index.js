function roll(){
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomDiceImage = "dice"+randomNumber1+".png";
  var randomImageSource = randomDiceImage;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random()*6)+1;
  var randomDiceImage2 = "dice"+randomNumber2+".png";
  var randomImageSource2 = randomDiceImage2;
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins !";  //still text is not emphasised as we are using textContent
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "<em>Player 2 Wins !</em>";  //now text is emphasised as innerHTML reads the html inside " "
  }
  else{
    document.querySelector("h1").innerHTML = "It's a Draw !";
  }
}
