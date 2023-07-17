
let myEntireForm =document.querySelector("#Tech-specialization-Form")
let mySubmitBtn = document.getElementById("submit-btn")
// console.log(mySubmitBtn)
// console.log(myEntireForm)

// mySubmitBtn.addEventListener("submit", function(){
    
//     myEntireForm.reset() 
    
// })


window.addEventListener("pageshow", function() {
    myEntireForm.reset() 
  });



    // function clearFormOnSubmit() {
    //     myEntireForm.reset()
    //   }
    
    //   setTimeout(clearFormOnSubmit,100)
