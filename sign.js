let email=document.getElementById("email");
let error=document.getElementById("error");
let error1=document.getElementById("error1");
let pwd=document.getElementById("pwd");
let rpwd=document.getElementById("rpwd");



var number = document.getElementById("number");



var passw=  /^[A-Za-z]\w{8,14}$/;

let regexp=/^([A-za-z0-9 \.-]+)@([A-za-z0-9 \-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
var phoneno = /^\d{10}$/;

function svalidation(){

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
   
 else if (pwd.value.match(passw)){
if(pwd.value>=8)

{
    error1.innerHTML="weak"
        error1.style.color="Red";
        return true;


}
if(pwd.value>=11)

{
    error1.innerHTML="Medium"
        error1.style.color="orange";
        return true;


}
if(pwd.value>=14)

{
    error1.innerHTML="Strong"
        error1.style.color="green";
        return true;


}

   


 }
 else{

    alert("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
    pwd.style.border= "2px solid red"
    return false;


     }


 if(number.value.match(phoneno)){

 
 
return true;
 }
else
 {
 alert("Invalid phonenumber");
 return false;
 }
 
        
    }

        

    






}
