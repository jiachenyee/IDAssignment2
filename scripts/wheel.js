function myfunction(){
    calculateSpins();
    var x = 1024; //min value
    var y = 9999; //max-value
  
    var deg = Math.floor(Math.random() * (x - y)) + y;
  
    document.getElementById("box").style.transform = "rotate(" + deg + "deg)";
  
    var element = document.getElementById("mainbox");
    element.classList.remove('animate');
    setTimeout(function(){
      element.classList.add('animate');
      displayEle();
    }, 5000);

    setTimeout(function(){
      overlay();
    }, 5500);    
  }


let posX = (window.innerWidth / 1.7);
let posY = (window.innerHeight / 2.0);
let overlayEle = document.getElementById("overlay");
let rewards = document.getElementById("rewards");
let title = document.getElementById("title");
let spins = 2;

function displayEle(){
  let qty = 1;
  var ele = document.elementFromPoint(posX, posY).textContent;
  rewards.textContent = ele + " x " + qty;
  console.log("break");
  console.log(posX);
  console.log(posY);
  console.log(ele);
}

function again(){
  overlayEle.style.display = "none";
}

function overlay(){
  overlayEle.style.display = "flex";
}

function calculateSpins(){
  spins -= 1;
  title.textContent = "Spin(s) left: " + spins;
}


let pos;
document.addEventListener("mousemove", ({pageX , pageY}) => {
  pos = `(${pageX}, ${pageY})`;
})
