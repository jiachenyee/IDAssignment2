//declaring of variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



//Player Class - with jump and draw functions
class Player{
    constructor(x,y,size){
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = "black";
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