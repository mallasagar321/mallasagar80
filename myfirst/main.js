let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
    menu.classList.toggle("move");
};
 
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  navbar.classList.toggle("open-menu");
};
//header background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle('header-active', window.scrollY > 0);
});


//email js
 
/*function sendmail(){
  var params = {
    from_name : document.getElementById("Full_name").value,
    email_id : document.getElementById("Email_ID").value,
    message: document.getElementById("message").value
  }
  emailjs.send("service_7mz59q9","template_drxfl1d",params).then(function(res){
    alert("Success!"+ res.status);
  });
}*/

 