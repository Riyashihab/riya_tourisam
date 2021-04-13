let email=document.getElementById("email");
let error=document.getElementById("error");
let pwd=document.getElementById("Pass");
let regexp=/^([A-za-z0-9 \.-]+)@([A-za-z0-9 \-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

function validation(){

    if(email.value.trim()==""){
        alert("Email cannot be blank")
        return false;
    }
    else{
        // return true;
        // alert("validation is proper")
    
    
    if (regexp.test(email.value)){
    //error.innerHTML="valid"
    error.style.color="green";
    //return true;
    }
    else{
    
        error.innerHTML="Invalid email"
        error.style.color="Red";
        return false;
    
    
    }

  if(pwd.value.trim()==""){
     alert("Password cannot be blank")
         return false;
 }
   
 else if (pwd.value.length<=5){

         alert("Pasword is incorrect")
         pwd.style.border= "2px solid red"
         return false;
    }

        










}}

