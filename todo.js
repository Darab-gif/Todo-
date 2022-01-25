var link=document.getElementsByTagName("li");
for(let k=0; k < link.length; k++){
    var span=document.createElement("span");
    var times=document.createTextNode("\u00D7");
    span.appendChild(times);
    span.className="close";
    link[k].appendChild(span);
    
}

var close=document.getElementsByClassName("close");
for(let k=0; k < close.length; k++){
    close[k].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
     
}

function myApp(){
    var input=document.getElementById("txt").value;
    var span=document.createElement("li");
    var list=document.createTextNode(input);
    
    span.appendChild(list);
        
        if(input=="" || input==null){
                alert("Input task before you proceed");
         }
        else{
            document.getElementById("task").appendChild(span);
            document.getElementById("txt").value="";
        }
       

    var spa=document.createElement("span");
    var demo=document.createTextNode("\u00D7");
    spa.appendChild(demo);
    spa.className="close";
    span.appendChild(spa);

    var close=document.getElementsByClassName("close");
    for(let k=0; k < close.length; k++){
        close[k].onclick=function(){
            var dev=this.parentElement;
            dev.style.display="none";
        }
    }
}

function myShow(){
    var text=document.getElementById("txt");
    text.value=text.value.toUpperCase();
}