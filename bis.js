//  window.alert("Hello To Our Page");
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

let userName=document.getElementById('username');
let password=document.getElementById('password');
let btn=document.getElementById('submit');
let error=document.getElementById('error')
 let details=[];


 btn.addEventListener('click' , function(){
  data()
  
})


  function data(){
    let user={
      name:userName.value,
      pass:password.value

    }
   // console.log(user);
    details.push(user)
    console.log(details);
   // empty()
  
  }
   
 

  /*function empty(){
if(userName.value == "" || password.value == ""){
  error.style.display="block";
  return false
}
else{
  error.style.display="none";
 window.location.href='bis.html'
  return true;
}
  }*/
  