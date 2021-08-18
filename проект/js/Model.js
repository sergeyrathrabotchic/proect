var xhr = new XMLHttpRequest();
var ot;

class Model {
    lines(){
    //открывае файл php
    xhr.open('POST', '../Ajax/Ajax.php');
    
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function (){
    //Делаем проверку
    if (xhr.readyState ===4 && xhr.status === 200){
        ot = xhr.responseText;
        ot = JSON.parse(ot);
        for(var i =0; i<ot.length;i++){
        strings (i,ot[i]);
        }
    }
    }

    //При желании передаем парметр 
    xhr.send();
    }
    
    
    edd_line(){
    //получаем значение в форме
    var param = document.forms.edd.vvod_name.value;
    if(param !=""){
    //открывае файл php
    xhr.open('POST', '../Ajax/Ajax.php');
    
    
    
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function (){
    //Делаем проверку
    if (xhr.readyState ===4 && xhr.status === 200){
        ot = xhr.responseText;
        ot = JSON.parse(ot);
        strings (ot[0]-1,ot[1]);
    }
    }

    //При желании передаем парметр 
    xhr.send("vvod_name=vvod_name&name=" + param);
    }
    }
    
    
     model_add_forma(){

       edd();
     }
     
     exit(){
         var form = document.querySelector("#form");
         body.removeChild(form);
     }
}