let username=document.getElementById("username");
let password=document.getElementById("password");

function validate(){
    if(username.value=="admin"&& password.value=="12345"){
    alert(" valid");

    return true;
    }
    else
    {
        alert("not valid");
    return false;
    
    }
}
