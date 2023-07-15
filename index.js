
let myEntireForm =document.querySelector("#Tech-specialization-Form")
let mySubmitBtn = document.getElementById("submit-btn")
console.log(mySubmitBtn)
console.log(myEntireForm)

mySubmitBtn.addEventListener("submit", function(){
    
    myEntireForm.reset() 
    
})

window.onpopstate = function(event) {
    // Check if the URL has a hash.
    if (!window.location.hash) {
      // If not, add a hash and reload the page.
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  };