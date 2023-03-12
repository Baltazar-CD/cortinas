function cotizar(){
	var mayor = 0;
	var respuesta = 0;
	var ancho = parseFloat(document.getElementById('ancho').value);
	var largo = parseFloat(document.getElementById('largo').value);
	

	if (ancho < 1 && largo < 1 ) {
		document.getElementById('resultado').innerHTML = "Al menos una medida debe ser mayor a un m2";
	}
	else{
		if (ancho >= 1 && largo >= 1) {
			respuesta = (ancho*largo)*750;
		}else{
			if (ancho > largo) {
				respuesta = ancho*750;
			}else{
				respuesta = largo*750;
			}
		}
		document.getElementById('resultado').innerHTML = "$"+respuesta+" Pesos";
	}

}