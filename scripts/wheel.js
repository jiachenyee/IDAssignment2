function myfunction(){
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

    
  }


let posX = (window.innerWidth / 1.5);
let posY = (window.innerHeight / 2.0);

function displayEle(){
  var ele = document.elementFromPoint(posX, posY);
  console.log("break");
  console.log(posX);
  console.log(posY);
  console.log(ele);
}



document.addEventListener("mousemove", ({pageX, pageY}) => {
  pos = `(${pageX}, ${pageY})`;
});