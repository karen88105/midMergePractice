var t=setInterval("go()",100);
var t=setInterval("gogo()",50);

function go(){
	var x=parseFloat(document.getElementById("all1").style.left);
	x=x-20;
	if (x<0) x=1200;
	console.log(x);
	document.getElementById("all1").style.left=x+"px";

	var x2=parseFloat(document.getElementById("all2").style.left);
	x2=x2-20;
	if (x2<0) x2=1200;
	console.log(x2);
	document.getElementById("all2").style.left=x2+"px";

	var x3=parseFloat(document.getElementById("all3").style.left);
	x3=x3+20;
	if (x3>1200) x3=0;
	console.log(x3);
	document.getElementById("all3").style.left=x3+"px";
}

function gogo(){
	var x4=parseFloat(document.getElementById("all4").style.left);
	x4=x4+20;
	if (x4>1200) x4=0;
	console.log(x4);
	document.getElementById("all4").style.left=x4+"px";
}