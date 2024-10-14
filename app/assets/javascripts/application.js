//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(function () {

  var valueHigh = document.getElementsByClassName("valuehigh");
  var valueMid = document.getElementsByClassName("valuemed");
  var valueLow = document.getElementsByClassName("valuelow");
  var noValue = document.getElementsByClassName("novalue");

  var removeHighCards = function(){
    for (var x in valueHigh) {  
      valueHigh[x].classList.toggle("hidden");
    }
  }

  var removeMediumCards = function(){
    for (var x in valueMid) {  
      valueMid[x].classList.toggle("hidden");
    }
  }

  var removeLowCards = function(){
    for (var x in valueLow) {  
      valueLow[x].classList.toggle("hidden");
    }
    removeNoValueCards();
  }

  var removeNoValueCards = function() {
    console
    for (var x in noValue) {  
      noValue[x].classList.toggle("hidden");
    }
  }




  var highCheck = document.getElementById("datafilter-general-high");
  var medCheck = document.getElementById("datafilter-general-med");
  var lowCheck = document.getElementById("datafilter-general-low");
  

  // //onclick
    highCheck.addEventListener("click", removeHighCards);

    medCheck.addEventListener("click", removeMediumCards);

    lowCheck.addEventListener("click", removeLowCards);



})
