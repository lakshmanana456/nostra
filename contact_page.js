var btnn = document.getElementById("btnn");
var sidebar = document.getElementById("sidebar");
var cancell = document.getElementById("cancell");

btnn.addEventListener("click", function () {
  sidebar.classList.add("active"); // Show with slide
});

cancell.addEventListener("click", function () {
  sidebar.classList.remove("active"); // Hide with slide
});
//notification

let cancel = document.querySelector("#btn");
let noti = document.querySelector("#notify");

cancel.addEventListener("click", function () {
    noti.remove();
});


// contact form validation


let submit = document.querySelector(".submit")
submit.addEventListener("click", function (event) {
    event.preventDefault()

    var emailRegex = /^[a-zA-Z0-9]+@gmail.com/
    var subjectRegex=/.*[a-zA-Z0-9!@#$%^&*(),.?\":{}|<>].*/
    var messageRegex=/^(\b\w+\b[\s\r\n]*){1,200}$/

    //
    let email = document.getElementById("email")
    let emailError = document.querySelector(".emailError")
    let subject=document.querySelector(".subject")
    let subjectError=document.querySelector(".subjectError")
    let message=document.querySelector(".message")
    let messageError=document.querySelector(".messageError")

    var valid=true
    //
     if (emailRegex.test(email.value) == false) { //use test to compare values
        var valid = false

        emailError.style.display = "inline"
      } else {
        emailError.style.display = "none"
      }

       if (subjectRegex.test(subject.value) == false) { //use test to compare values
        var valid = false

        subjectError.style.display = "inline"
      } else {
        subjectError.style.display = "none"
      }

      if (messageRegex.test(message.value) == false) { //use test to compare values
        var valid = false

        messageError.style.display = "inline"
      } else {
        messageError.style.display = "none"
      }

        if (valid == true) {
        alert("Message send successfully")
         
          FormData.reset()
      }
})