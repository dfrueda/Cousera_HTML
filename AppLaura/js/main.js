var puntosstat=false, punto2stat=false, punto3stat=false, punto4stat=false, punto5stat=false;
function cambiarPunto1(){
	if(puntosstat==false){
		document.getElementById("punto1").className = "punto1IconActive";
		puntosstat=true;
	}
	else if(puntosstat==true && punto2stat==true && punto3stat==true && punto4stat==true && punto5stat==true){
		document.getElementById("punto2").className = "punto2IconInactive";
		punto2stat=false;
		document.getElementById("punto3").className = "punto3IconInactive";
		punto3stat=false;
		document.getElementById("punto4").className = "punto4IconInactive";
		punto4stat=false;
		document.getElementById("punto5").className = "punto5IconInactive";
		punto5stat=false;
	} 
	else{
		document.getElementById("punto1").className = "punto1IconInactive";
		puntosstat=false;
	}
	
}


function cambiarPunto2(){
	if(punto2stat==false){
		document.getElementById("punto2").className = "punto2IconActive";
		punto2stat=true;
		document.getElementById("punto1").className = "punto1IconActive";
		puntosstat=true;
	}
	else if(punto2stat==true && punto3stat==true && punto4stat==true && punto5stat==true){
		document.getElementById("punto3").className = "punto3IconInactive";
		punto3stat=false;
		document.getElementById("punto4").className = "punto4IconInactive";
		punto4stat=false;
		document.getElementById("punto5").className = "punto5IconInactive";
		punto5stat=false;
	} 
	else{
		document.getElementById("punto2").className = "punto2IconInactive";
		punto2stat=false;
		document.getElementById("punto1").className = "punto1IconInactive";
		puntosstat=false;
	}
	
}


function cambiarPunto3(){
	if(punto3stat==false){
		document.getElementById("punto3").className = "punto3IconActive";
		punto3stat=true;
		document.getElementById("punto2").className = "punto2IconActive";
		punto2stat=true;
		document.getElementById("punto1").className = "punto1IconActive";
		puntosstat=true;
	}
	else if(punto3stat==true && punto4stat==true){
		document.getElementById("punto4").className = "punto4IconInactive";
		punto4stat=false;
		document.getElementById("punto5").className = "punto5IconInactive";
		punto5stat=false;
	} 
	
	else{
		document.getElementById("punto3").className = "punto3IconInactive";
		punto3stat=false;
		document.getElementById("punto2").className = "punto2IconInactive";
		punto2stat=false;
		document.getElementById("punto1").className = "punto1IconInactive";
		puntosstat=false;
	}
	
}


function cambiarPunto4(){
	if(punto4stat==false){
		document.getElementById("punto4").className = "punto4IconActive";
		punto4stat=true;
		document.getElementById("punto3").className = "punto3IconActive";
		punto3stat=true;
		document.getElementById("punto2").className = "punto2IconActive";
		punto2stat=true;
		document.getElementById("punto1").className = "punto1IconActive";
		puntosstat=true;
	}
	else if(punto4stat==true && punto5stat==true){
		document.getElementById("punto5").className = "punto5IconInactive";
		punto5stat=false;
	} 
	
	else{
		document.getElementById("punto4").className = "punto4IconInactive";
		punto4stat=false;
		document.getElementById("punto3").className = "punto3IconInactive";
		punto3stat=false;
		document.getElementById("punto2").className = "punto2IconInactive";
		punto2stat=false;
		document.getElementById("punto1").className = "punto1IconInactive";
		puntosstat=false;
	}
	
}


function cambiarPunto5(){
	if(punto5stat==false){
		document.getElementById("punto5").className = "punto5IconActive";
		punto5stat=true;
		document.getElementById("punto4").className = "punto4IconActive";
		punto4stat=true;
		document.getElementById("punto3").className = "punto3IconActive";
		punto3stat=true;
		document.getElementById("punto2").className = "punto2IconActive";
		punto2stat=true;
		document.getElementById("punto1").className = "punto1IconActive";
		puntosstat=true;
	}
	else{
		document.getElementById("punto5").className = "punto5IconInactive";
		punto5stat=false;
		document.getElementById("punto4").className = "punto4IconInactive";
		punto4stat=false;
		document.getElementById("punto3").className = "punto3IconInactive";
		punto3stat=false;
		document.getElementById("punto2").className = "punto2IconInactive";
		punto2stat=false;
		document.getElementById("punto1").className = "punto1IconInactive";
		puntosstat=false;
	}
	
}

/*var recordatorio=true;
	//function activarrecordatorio() {
//  var recordatorio = document.getElementById('recordatoriof');
//  if (recordatorio.style.visibility === 'visible') {
//    recordatorio.style.visibility = 'hidden';
//  } else {
//    recordatorio.style.visibility = 'visible';
//  }
//}*/


var frasestat=false;
function selecfrase(){
	if(frasestat==false){
		document.getElementById("selectorfrase").className = "selecFraseActive";
		frasestat=true;
	} else{
		document.getElementById("selectorfrase").className = "selecFraseInactive";
		frasestat=false;
	}
	
}
var frase1stat=false;
function selecfrase1(){
	if(frase1stat==false){
		document.getElementById("selectorfrase1").className = "selecFraseActive";
		frase1stat=true;
	} else{
		document.getElementById("selectorfrase1").className = "selecFraseInactive";
		frase1stat=false;
	}
	
}

var frase2stat=false;
function selecfrase2(){
	if(frase2stat==false){
		document.getElementById("selectorfrase2").className = "selecFraseActive";
		frase2stat=true;
	} else{
		document.getElementById("selectorfrase2").className = "selecFraseInactive";
		frase2stat=false;
	}
	
}

var frase3stat=false;
function selecfrase3(){
	if(frase3stat==false){
		document.getElementById("selectorfrase3").className = "selecFraseActive";
		frase3stat=true;
	} else{
		document.getElementById("selectorfrase3").className = "selecFraseInactive";
		frase3stat=false;
	}
	
}

var frase4stat=false;
function selecfrase4(){
	if(frase4stat==false){
		document.getElementById("selectorfrase4").className = "selecFraseActive";
		frase4stat=true;
	} else{
		document.getElementById("selectorfrase4").className = "selecFraseInactive";
		frase4stat=false;
	}
	
}

var incrementar=0;
function aumentar10(){
	if(incrementar<100){
		incrementar+=10;
		TweenMax.to("#barraN",1.5,{paddingRight:(incrementar+"%")});
	}
	
}

var incrementars=0;
function aumentar3(){
	if(incrementars<100){
		incrementars+=33;
		TweenMax.to("#barraS",1.5,{paddingRight:(incrementars+"%")});
	}
	
}

var incrementarm=0;
function aumentar5(){
	if(incrementarm<100){
		incrementarm+=20;
		TweenMax.to("#barraM",1.5,{paddingRight:(incrementarm+"%")});
	}
	
}

var incrementaro=0;
function aumentar1(){
	if(incrementaro<100){
		incrementaro+=100;
		TweenMax.to("#barraO",1.5,{paddingRight:(incrementaro+"%")});
	}
	
}


var recordatorio=false;
	function activarrecordatorio() {
		if(recordatorio==false){
			document.getElementById("recordar").style.display = "none";
			recordatorio=true;
		}else{
			document.getElementById("recordar").style.display = "inherit";
			recordatorio=false;
		}
  }


/*dias*/
var dialunes=false;
function cambiarlunes(){
	if(dialunes==false){
		document.getElementById("lunes").className = "lunesiconactive";
		dialunes=true;
	}else{
		document.getElementById("lunes").className = "lunesiconinactive";
		dialunes=false;
	}
	
}

var diamartes=false;
function cambiarmartes(){
	if(diamartes==false){
		document.getElementById("martes").className = "martesiconactive";
		diamartes=true;
	}else{
		document.getElementById("martes").className = "martesiconinactive";
		diamartes=false;
	}
	
}

var diamiercoles=false;
function cambiarmiercoles(){
	if(diamiercoles==false){
		document.getElementById("miercoles").className = "miercolesiconactive";
		diamiercoles=true;
	}else{
		document.getElementById("miercoles").className = "miercolesiconinactive";
		diamiercoles=false;
	}
	
}

var diajueves=false;
function cambiarjueves(){
	if(diajueves==false){
		document.getElementById("jueves").className = "juevesiconactive";
		diajueves=true;
	}else{
		document.getElementById("jueves").className = "juevesiconinactive";
		diajueves=false;
	}
	
}

var diaviernes=false;
function cambiarviernes(){
	if(diaviernes==false){
		document.getElementById("viernes").className = "viernesiconactive";
		diaviernes=true;
	}else{
		document.getElementById("viernes").className = "viernesiconinactive";
		diaviernes=false;
	}
	
}

var diasabado=false;
function cambiarsabado(){
	if(diasabado==false){
		document.getElementById("sabado").className = "sabadoiconactive";
		diasabado=true;
	}else{
		document.getElementById("sabado").className = "sabadoiconinactive";
		diasabado=false;
	}
	
}

var diadomingo=false;
function cambiardomingo(){
	if(diadomingo==false){
		document.getElementById("domingo").className = "domingoiconactive";
		diadomingo=true;
	}else{
		document.getElementById("domingo").className = "domingoiconinactive";
		diadomingo=false;
	}
	
}


