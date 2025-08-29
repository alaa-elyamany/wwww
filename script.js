//user information
var user=
    {Email:"alaaelyamany197@gmail.com",password :"123456"}

// login form
var form_button=document.getElementById("form_button")
var form_login=document.getElementById("form_login")
if(form_login){
form_login.addEventListener("submit", function(e){
    e.preventDefault(); 
let email=document.getElementById("exampleInputEmail1").value
let password=document.getElementById("exampleInputPassword1").value
if(email==user.Email&&password==user.password){
   
   location.href="home.html"
}
else{
   Swal.fire({
  icon: "error",
  title: "Something went wrong!",
  text: "Email or Password is wrong.\nplease,Enter the correct Email and Password. ",

});
}
})
}



   

     
     



