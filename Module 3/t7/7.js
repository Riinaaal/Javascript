const trigger = document.getElementById("trigger")
let img = document.getElementById('target')

trigger.addEventListener("mouseover", function(){
  img.src = "img/picB.jpg"
} )
trigger.addEventListener("mouseout", function(){
  img.src = "img/picA.jpg"
} )