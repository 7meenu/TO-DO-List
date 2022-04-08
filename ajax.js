function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var output="";
            for(var i=0;i<response.length;i++){
                
                output+= "<input type=checkbox name='titlecheck'  class='checkboxtag' onclick='return validate()'>"+response[i].title+"<br>";

            
            }
            document.getElementById("demo").innerHTML=output;

        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/posts",true);

    xhttp.send();
  }

function validate()
{
    
    var a=document.getElementsByName('titlecheck');
    var newvar=0;
    var count;
    for(count=0;count<a.length;count++){
        if(a[count].checked==true){
            newvar=newvar+1;

        }

    }
    if(newvar>5)
    {
       // console.log("hai");
        alert("Congrats.5 Tasks have been Successfully Completed");
        return false;
    }

} 
