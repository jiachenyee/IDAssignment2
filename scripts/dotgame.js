//extract contaxt of canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//variables of game over screen --> overlay card
const card = document.getElementById("card");
const cardScore = document.getElementById("score");

const points = document.getElementById("points");




//<--------------------------------- global functions --------------------------------->
//declaring of variabes

let player = null;
let arrayBlocks = [];
//used for 'setInterval'
let presetTime = 1000;
//speed of block
let enemySpeed = 5;
//player score
let score = 0; 
//used to see if user has scored another 10 points or not
let scoreIncrement = 0; 
//ball doesnt score more than one point at a time 
let canScore = true;


//start game
function startGame(){
    player = new Player(70,244,5, "#EEC643");
    arrayBlocks = [];
    score = 0;
    scoreIncrement = 0
    enemySpeed = 5;
    canScore = true;
    presetTime = 1000;
}
  

//restart game --> function called in html
function restartGame(button){
    card.style.display = "none";
    button.blur();
    startGame();
    requestAnimationFrame(animate);
}


//randomizing number to calculate time intervals
function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function randomInterval(timeInterval){
    let returnTime = timeInterval;
    if(Math.random() < 0.5){
        returnTime += getRandomNumber(presetTime / 3, presetTime * 1.5);
    } else {
        returnTime -= getRandomNumber(presetTime / 5, presetTime / 2);
    }
    return returnTime;
}


//collision of blocks --> return true if collide
function collision(player, block){
    let s1 = Object.assign(Object.create(Object.getPrototypeOf(player)), player);
    let s2 = Object.assign(Object.create(Object.getPrototypeOf(block)), block);
    //dont need pixel perfect collision detection 
    //s2.length = s2.length - 5;
    s2.x = s2.x + 5;
    s2.y = s2.y + 5;
    return !(
        (s1.x > (s2.x + s2.length)) ||      //R1 is to the right of R2
        ((s1.x + s1.size) < s2.x) ||        //R1 to the left of R2
        (s1.y > (s2.y + s2.breath)) ||      //R1 is below R2
        ((s1.y + s1.size) < (s2.y))           //R1 is above R2
    )
}
  
  //return true if the player is past the block
  function isPastBlock(player, block){
    return(
      player.x + (player.size / 2) > block.x + (block.length / 4) &&
      player.x + (player.size / 2) < block.x + (block.length / 4) * 3
    )
  }


//<----------------------------- classes and its functions ----------------------------->
//Player Class - with jump and draw functions
class Player{
    constructor(x,y,size,color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        // jump configuration
        this.jumpHeight = 10; 
        this.shouldJump = false;
        this.jumpCounter = 0;
        this.jumpUp = true;
    }
  
    //jumping effect of player
    jump(){
        if (this.shouldJump) {
            this.jumpCounter++;
            if(this.jumpCounter < 15){
                //Go up 
                this.y -= this.jumpHeight;
            } else if (this.jumpCounter > 14 && this.jumpCounter < 19) {
                this.y += 0;
            } else if (this.jumpCounter < 33) {
                //Come down 
                this.y += this.jumpHeight
            }
    
            //end cycle
            if (this.jumpCounter >= 32) {
                this.shouldJump = false;
            }
        }
    }
  
    //display of player
    draw(){
        this.jump();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = "#EEC643";
        ctx.fill();
    }
}
  


//Block Class [obstacles] - draw and slide functions
class AvoidBlock {
    constructor(length, breath, radius, speed){
        this.x = canvas.width + length;
        this.y = 250 - breath;
        this.length = length;
        this.breath = breath;
        this.radius = radius;
        this.color = "#0D21A1";
        this.slideSpeed = speed;
    }
  
    //display of block objects
    draw(){ 
        var x = this.x;
        var y = this.y;
        var h = this.breath;
        var rad = this.radius;
        var r = x + this.length;
        var b = y + this.breath;
        ctx.fillStyle = this.color;
        //adding border radius
        ctx.moveTo(x+rad, y);
        ctx.lineTo(r-rad, y);
        ctx.quadraticCurveTo(r, y, r, y+rad);
        ctx.lineTo(r, y+h-rad);
        ctx.quadraticCurveTo(r, b, r-rad, b);
        ctx.lineTo(x+rad, b);
        ctx.quadraticCurveTo(x, b, x, b-rad);
        ctx.lineTo(x, y+rad);
        ctx.quadraticCurveTo(x, y, x+rad, y);
        ctx.fill();
    }
  
    //animation of block object
    slide(){
        this.draw();
        this.x -= this.slideSpeed;
    }
}


//auto generate blocks
function generateBlocks(){
    let timeDelay = randomInterval(presetTime);
    arrayBlocks.push(new AvoidBlock(45, 65, 5, enemySpeed));

    setTimeout(generateBlocks, timeDelay);
}


//drawing the ground
function drawBackgroundLine(){
    ctx.beginPath();
    ctx.moveTo(0,250);
    ctx.lineTo(1200,250);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

//displaying the score 
function drawScore() {
    //ctx.font = "60px Arial";
    //ctx.fillStyle = "black";
    //let scoreString = score.toString();
    //let xOffset = ((scoreString.length - 1) * 20);
    //ctx.fillText(scoreString, 400 - xOffset, 100);
    let price = score/20;
    let num = price + 2;
    points.innerHTML = "$" + (Math.round(num * 100) / 100).toFixed(2);
}

//increase difficulty of the game when user score more points --> speed increases
function shouldIncreaseSpeed(){
    if(scoreIncrement + 10 === score){
        scoreIncrement = score;
        enemySpeed++;
        presetTime >= 100 ? presetTime -= 100 : presetTime = presetTime / 2; 

        //update speed of existing blocks
        arrayBlocks.forEach(block => {
            block.slideSpeed = enemySpeed;
        });
        console.log("speed increased");
    }
}


//movement animation
let animationId = null;
function animate(){
    animationId = requestAnimationFrame(animate);
    ctx.clearRect(0,0, canvas.width, canvas.height);
  
    //canvas logic
    drawBackgroundLine();
    drawScore();
    //foreground
    player.draw();

    //check to see if game speed should be should be increased
    shouldIncreaseSpeed();


    arrayBlocks.forEach((arrayBlock, index) => {
        arrayBlock.slide();
        //end game when collision
        if (collision(player, arrayBlock)){
            cardScore.textContent = score;
            card.style.display = "block";
            cancelAnimationFrame(animationId);
        }
        //user should score a point if this is the case
        if (isPastBlock(player, arrayBlock) && canScore){
            canScore = false;
            score++;
        }
        //delete block that has left the screen
        if((arrayBlock.x + arrayBlock.size) <= 0){
            setTimeout(() => {
                arrayBlocks.splice(index, 1);
            }, 0)
        }
    });
}
  




startGame();
animate();
setTimeout(() => {
    generateBlocks();
}, randomInterval(presetTime));


//event listeners --> jump when space key is pressed
addEventListener("keydown", e => {
    if(e.code === "Space"){
        if(!player.shouldJump){
            player.jumpCounter = 0;
            player.shouldJump = true;
            canScore = true;
        }
    }
})
