window.onload = function(){
    let max = 6;
    let randomint1 = Math.floor(Math.random()*(max));
    let randomint2 = Math.floor(Math.random()*(max));

    let arr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

    let image1 = document.getElementsByClassName("img1")[0];
    image1.setAttribute("src",arr[randomint1]);
    let image2 = document.getElementsByClassName("img2")[0];
    image2.setAttribute("src",arr[randomint2]);
    let texr = document.querySelector("h1");
    if(randomint1>randomint2){
        texr.textContent = "🚩Player1 wins";
    }else if(randomint1<randomint2){
        texr.textContent = "Player2 wins🚩";
    }else{
        texr.textContent = "Draw";
    }


}