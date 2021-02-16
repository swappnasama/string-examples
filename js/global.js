const name=document.querySelector('#name');
const message=document.querySelector('#message');
const error=document.querySelector('#error');
name.addEventListener('change', function(){
  document.querySelector('h1').innerHTML=document.querySelector('h1').innerHTML +" " + name.value;

});
message.addEventListener('change',function(){
  let messageLength= message.value.length;
  
  message.style.border="1px solid #ccc";
  error.style.color="black";
  if (messageLength <25)
  {
    error.style.color="red";
    message.style.border="1px solid red";
    error.innerHTML="Please enter minimum of 25 characters in your message" ;
  }
  else if(message.value.indexOf("@") !== -1 || message.value.indexOf("#") !==-1 || message.value.indexOf("$") !== -1 ){
    error.style.color="red";
    message.style.border="1px solid red";
    error.innerHTML="Special characters not allowed" ;
  }
  else{
    error.innerHTML="";
  }
}); 