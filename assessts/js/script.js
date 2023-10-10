function submit(){
    checkName();
}
function checkName(){
   var name= document.getElementById("name").value;
   if(name ==""){
    document.getElementById("warningName").textContent="Name Is Required";
   }else{
    document.getElementById("validName").textContent="Accepted";
    validEmail();
   }
}
function clearForm(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("time").value="";
    document.getElementById("date").value="";
    document.getElementById("number").value="";
}
function clearNameMsgs(){
    document.getElementById("warningName").textContent="";
    document.getElementById("validName").textContent="";
}
function clearEmailMsgs(){
    document.getElementById("warningEmail").textContent="";
    document.getElementById("validEmail").textContent="";
}
function clearDateMsgs(){
    document.getElementById("warningDate").textContent="";
    document.getElementById("validDate").textContent="";
}
function clearTimeMsgs(){
    document.getElementById("warningTime").textContent="";
    document.getElementById("validTime").textContent="";
}
function clearNumberMsgs(){
    document.getElementById("warningNumber").textContent="";
    document.getElementById("validNumber").textContent="";
}
function checkFrm(){
    isValid();
}
function clearWarningMsg(id){
    document.getElementById(id).textContent="";
}
function validEmail(){

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var emailValue =document.getElementById("email").value;
if(emailValue ==""){
    document.getElementById("warningEmail").textContent="Email Is Required";
   }else{
    if (emailValue.match(validRegex)) {
        document.getElementById("validEmail").textContent="Valid email address address";
        validDate();
      }else{
        document.getElementById("warningEmail").textContent="Invalid email address address!";
      }
   }
 
}
function validDate(){
    document.getElementById("warningDate").textContent="";
    document.getElementById("validDate").textContent="";
    var reservationDate= document.getElementById("date").value;
    if(reservationDate ==""){
     document.getElementById("warningDate").textContent="Date Is Required";
    }else{
        var dateOfNow=new Date().toISOString().slice(0,10);
        if(dateOfNow <= reservationDate)
        {
            document.getElementById("warningDate").textContent="";
            document.getElementById("validDate").textContent="Valid Date";
            validTime();
        }else{
            document.getElementById("warningDate").textContent="Invalid Date !! Today is : "+dateOfNow;
        }
    }
}
function validTime(){
    document.getElementById("warningTime").textContent="";
    document.getElementById("validTime").textContent="";
    var reservationTime= document.getElementById("time").value;
    if(reservationTime ==""){
  document.getElementById("warningTime").textContent="Time Is Required";
     }else{
        // var orginalTime=new Date().toLocaleTimeString().substr(0,12);
        // var timeOfNow=new Date().toLocaleTimeString().substr(0,4);
        // if(timeOfNow <= reservationTime)
        // {
        //     document.getElementById("warningTime").textContent="";
            document.getElementById("validTime").textContent="Accepted at any time today";
            validNumberPpl();
        // }else{
        //     document.getElementById("warningTime").textContent="Invalid Time !! Time now : "+orginalTime;
        //}
   }
}
function validNumberPpl(){
    var number= document.getElementById("number").value;
    if(number ==""){
     document.getElementById("warningNumber").textContent="Number Of Customers Is Required";
    }else{
        if(number >= 1 && number <=10)
        {
            document.getElementById("validNumber").textContent="Accepted Number Of Customers";
            alert('success, your reservation is ready');
        }
        else{
            document.getElementById("warningNumber").textContent="Number Of Customers Must Be Between 1 and 10";
        }
    }
}