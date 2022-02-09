//declaring of variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



//Player Class - with jump and draw functions
class Player{
    constructor(x,y,size){
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = "#EEC643";
      // jump configuration
      this.jumpHeight = 10; 
      this.shouldJump = false;
      this.jumpCounter = 0;
    }
  
    //jumping effect of player
    jump(){
      if(this.shouldJump){
        this.jumpCounter++;
        if(this.jumpCounter < 15){
          //Go up 
          this.y -= this.jumpHeight;
        }else if(this.jumpCounter > 14 && this.jumpCounter < 19){
          this.y += 0;
        }else if(this.jumpCounter < 33){
          //Come down 
          this.y += this.jumpHeight
        }
  
        //end cycle
        if(this.jumpCounter >= 32){
          this.shouldJump = false;
        }
      }
    }
  
    //display of player
    draw(){
      this.jump();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
  
  let player = new Player(70,344,5);


  //Block Class [obstacles] - draw and slide functions
  class AvoidBlock {
    constructor(length, breath, radius, speed){
      this.x = canvas.width + length;
      this.y = 350 - breath;
      this.length = length;
      this.breath = breath;
      this.radius = radius;
      this.color = "blue";
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