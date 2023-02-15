var value=document.querySelector(".dark-light img");
var style1 = document.getElementById("stylesheet1");
var counter=0;

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function m(){
  if(counter===0){
      swapStyleSheet("./css/light.css");
      value.src="./images/moon.png"
      counter++; 
  }
  else {
      swapStyleSheet("./css/default.css"); 
      value.src="./images/sun.png"
      counter--; 
  }
}
