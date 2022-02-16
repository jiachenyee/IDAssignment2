var ele;
let overlayEle = document.getElementById("overlay");
let rewards = document.getElementById("rewards");
let title = document.getElementById("title");


document.addEventListener("DOMContentLoaded" , e => {
    let spins = localStorage.getItem("spins");
    document.getElementById("title").textContent = "Spin(s) Left: " + spins;
    //localStorage.setItem("spins", spins);
});
    


function myfunction(){
    let spins = localStorage.getItem("spins");
    //console.log(spins);
    localStorage.setItem("spins" , spins-1);
    document.getElementById("title").textContent = "Spin(s) Left: " + (spins-1);
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
        overlayEle.style.display = "flex";
    }, 5500);    
  }




function displayEle(){
    let posX;
    if (window.innerWidth < 600){
      posX = (window.innerWidth / 1.3);
    }
    else{
      posX = (window.innerWidth / 1.7);
    }
    let posY = (window.innerHeight / 2.0);
    let qty = 1;
    ele = document.elementFromPoint(posX, posY);
    rewards.textContent = ele.textContent;
    console.log(ele);
}

function again(){
    let spins = localStorage.getItem("spins");
    if(spins <= 0){
        window.open(`cart`,"_self");
    }
    else{
        overlayEle.style.display = "none";
        var cart = JSON.parse(localStorage.getItem("cart"));
          
        if (cart == undefined) {
            cart = [];
        }
    
        cart.push({
            "sku": ele.id, // replace with SKU
            "price": 0, // make it free
            "qty": 1,   // give them 1
            "editableQty": false // set this to false so users cannot add more
        });
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}



let pos;
document.addEventListener("mousemove", ({pageX , pageY}) => {
  pos = `(${pageX}, ${pageY})`;
})

/*

var cart = JSON.parse(localStorage.getItem("cart"));
    
if (cart == undefined) {
    cart = [];
}

cart.push({
    "sku": PRODUCT_SKU, // replace with SKU
    "price": 0, // make it free
    "qty": 1,   // give them 1
    "editableQty": false // set this to false so users cannot add more
});
localStorage.setItem("cart", JSON.stringify(cart));

window.open(`cart`,"_self")

*/

