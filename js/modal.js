
 function ktname(){
    var name=document.getElementById("name").value;
    var reg=/^[A-Za-z0-9_\.]{6,32}$/
    if(reg.test(name)){
        document.getElementById("err").innerHTML="(*)";
        return true;
    }else{
        document.getElementById("err").innerHTML="(*)Sai";
        return false;
    }
}
function ktemail(){
    var email=document.getElementById("email").value;
    var reg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(reg.test(email)){
        document.getElementById("err1").innerHTML="(*)";
        return true;
    }else{
        document.getElementById("err1").innerHTML="(*)Sai";
        return false;
    }
}
function ktmk(){
    var mk=document.getElementById("pass").value;
    var reg= /^[\w-@#$%^&*!]{8,}$/;
    if(reg.test(mk)){
        document.getElementById("err2").innerHTML="(*)";
        return true;
    }else{
        document.getElementById("err2").innerHTML="(*)Sai";
        return false;
    }
}
function ktrmk(){
    var mk=document.getElementById("pass").value;
    var rmk=document.getElementById("rpass").value;
    if(mk==rmk){
        document.getElementById("err3").innerHTML="(*)";
        return true;
    }else{
        document.getElementById("err3").innerHTML="(*)Sai";
        return false;
    }
}