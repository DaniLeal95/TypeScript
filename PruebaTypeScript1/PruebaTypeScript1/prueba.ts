import {Coche} from 'Coche';

function holacoche(coche: Coche): string {


    var saludo = "El nombre del coche es : " + coche.getNombre + " , el color es : " + coche.getColor + ", y la potencia es : " + coche.getVelocidad +" CV";


    return saludo;
}

//Creamos el coche
var c1: Coche;
c1 = new Coche();

c1.setNombre("audi");
c1.setColor("rojo");
c1.setVelocidad(150);

console.log(c1.getNombre() + c1.getColor() + c1.getVelocidad());
//LLamamos a la funcion
document.getElementById("container").innerHTML = holacoche(c1);






