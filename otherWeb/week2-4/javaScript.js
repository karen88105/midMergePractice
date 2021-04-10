var t=setInterval("go()",1000);
var count=0;

function go(){
    var c1=document.getElementById("c1");
    var c2=document.getElementById("c2");
    var c3=document.getElementById("c3");
    var c4=document.getElementById("c4");
    var c5=document.getElementById("c5");
    var c6=document.getElementById("c6");
    var c7=document.getElementById("c7");
    var c8=document.getElementById("c8");
    var c9=document.getElementById("c9");
    var all=document.getElementById("all");
    var vi=document.getElementById("vi");

    if(count==0)
        document.getElementById("c1").style.visibility="visible";
    else if(count==1)
        document.getElementById("c2").style.visibility="visible";
    else if(count==2)
        document.getElementById("c3").style.visibility="visible";
    else if(count==3)
        document.getElementById("c4").style.visibility="visible";
    else if(count==4)
        document.getElementById("c5").style.visibility="visible";
    else if(count==5)
        document.getElementById("c6").style.visibility="visible";
    else if(count==6)
        document.getElementById("c7").style.visibility="visible";
    else if(count==7)
        document.getElementById("c8").style.visibility="visible";
    else if(count==8)
        document.getElementById("c9").style.visibility="visible";
    else if(count==9)
        document.getElementById("all").style.visibility="visible";
    else if(count==10)
        document.getElementById("vi").style.visibility="visible";
    
    if(count<12)
        count++;
}