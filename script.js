let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(360 * 10000);;

let flash = document.querySelector(".container div");

let spinCount = 0;
btn.onclick = function () {
    spinCount++;

    if (spinCount==1){
        container.style.transform = "rotate(" + number + "deg)";
        number = Math.ceil(200 * 10000);  
    }
    else {   
        container.style.transform = "rotate(" + number + "deg)";
        number += Math.ceil(Math.random() * 10000);
    }
}
  
