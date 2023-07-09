var dkit=document.querySelectorAll(".drum").length;
for(var i=0; i < dkit;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function() {
   var buttoninnerHtml = this.innerHTML;
   makeSound(buttoninnerHtml);
   buttonanimation(buttoninnerHtml);
    } );

  }
  document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonanimation(event.key);
  }) ;
    function makeSound(key){
      switch (key) {
        case "w":
          var drum_alert_1= new Audio('drum_alert_1.mp3');
          drum_alert_1.play();
          break;
          case "a":
          var drum_alert_2 = new Audio('drum_alert_2.mp3');
          drum_alert_2.play();
          break;
          case "s":
          var failuresound = new Audio('failuresound.mp3');
          failuresound.play();
          break;
          case "d":
          var loon= new Audio('loon.mp3');
          loon.play();
          break;
          case "j":
          var iphone= new Audio('iphone.mp3');
          iphone.play();
          break;
          case "k":
          var magic= new Audio('magic.mp3');
          magic.play();
          break;
        default:
          var ad = new Audio('ad.mp3');
          ad.play();
       }
    }
  function buttonanimation(currentkey) {
    var activekey=document.querySelector("."+currentkey);
    activekey.classList.add("pressed");
    setTimeout(function() {
      activekey.classList.remove("pressed"); 
    },100);
  }
  


