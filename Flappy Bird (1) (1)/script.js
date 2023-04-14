var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
var fly = new Audio('Jump .mp3');
var passThru =  new Audio('passthru.mp3');
var die = new Audio ('die.mp3')
var back = new Audio ('background.mp3')

back.play()


hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    var top = (random*100)+150;
    hole.style.top = random + "px";
    counter++;
    passThru.play()
    document.getElementById("Score").innerHTML = counter-1;


    
});
setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(characterTop < 500){
        character.style.top = (characterTop+3)+"px";
    }


    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){

        die.play()
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0;
        //window.reload()

        
    }
},10);




function jump(){
    jumping = 1;
   // fly.src = "Fly.mp3";
    fly.play()
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if(characterTop>6){
            character.style.top = (characterTop-6)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}

