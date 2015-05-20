// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
$('#btncomenzar').on ('tap', function() {
	navigator.vibrate(1000);
	
	
}); 


$('#btninicio').on ('tap', function() {
	navigator.vibrate(1000);
	
	
}); 

$('#btnfecha').on ('tap', function() {
	navigator.vibrate(1000);
	
	
}); 

$('#btndatos').on ('tap', function() {
	navigator.vibrate(1000);
	
	
});

$('#btncalcular').on ('tap', function() {
	navigator.vibrate(1000);
	
	
});

$('#btn_nuevo').on ('tap', function() {
	navigator.vibrate(1000);
	
	
});
	
	
	
}); 
});


$(document).ready(function(e) {
	var nombre;
	$('#btnfecha').click(function(e){
		nombre=$('#txtnombre').val();
		
		
	});
	
	$('#btncalcular').click(function(e){
		var fecha= new Date();
		

		fechaA = new Date(fecha.getFullYear() + '/' +(fecha.getMonth()+1) +'/'+ fecha.getDate());

		var diaC=$('#txtdia').val();
		var mesC=$('#txtmes').val();
		var yearC=$('#txtanio').val();

		fechaC=new Date(fecha.getFullYear() +'/'+ mesC +'/'+ diaC);
		fechaCA = fechaC;
		

	
	if(fechaC > fechaA)
	{
       cuando=fechaC-fechaA;
	   faltan=((((cuando/1000)/60)/60)/24);
	  
	}
	else
	{
	fechaC=new Date((fecha.getFullYear()+1) +'/'+ mesC +'/'+ diaC);
	  cuando=fechaC-fechaA;
	   faltan=((((cuando/1000)/60)/60)/24);
	   
	}
	$('#divnombre').text(nombre +' faltan:');
		$('#divdias').text(faltan);
		if (faltan==1)
		{
		$('#divfelicidades').text('Dias Para Tu Cumple');
		}
		else
		{
			$('#divfelicidades').text('Dias Para Tu Cumple');
		}
		if (faltan <7)
		{
				
	$('#felicidades').show();
	$('#feli').show();
	    }
		
	
		edad=fecha.getFullYear()-yearC;
		if (fechaCA > fechaA)
		{
			edad=edad-1;
			$('#divedad').text('Tienes '+ edad  + ' Años');
		}
		else
		{
		$('#divedad').text('Tienes '+ edad  +  ' Años');
		}
			function redondeo(numero, decimales)
{
var flotante = parseFloat(numero);
var resultado = Math.round(flotante*Math.pow(1000,decimales))/Math.pow(1000,decimales);
return resultado;
}
});

	});