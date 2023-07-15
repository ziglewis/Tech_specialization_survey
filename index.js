
let myEntireForm =document.querySelector("#Tech-specialization-Form")
let mySubmitBtn = document.getElementById("submit-btn")
console.log(mySubmitBtn)
console.log(myEntireForm)

mySubmitBtn.addEventListener("submit", function(){
    
    myEntireForm.reset() 
    
})