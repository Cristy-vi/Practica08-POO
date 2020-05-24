
//Constructor
//En los parentesis tengo parametros

function coche(marca, modelo, anyo, color) {
	//el parametro "marca" es igual a la marca que me dan
	this.marca = marca;
	this.modelo = modelo;
	this.anyo = anyo;
	this.color = color;
}

/* Palabra reservada NEW me sirve para crear los obsjetos de un constructor
Instanciar de una funcion consturctora
INSTANCIAS
*/
var coche1 = new coche('Fiat', 'Punto', '2000', 'rojo');
 
var coche2 = new coche('Seat', 'Ibiza', '2010', 'verde');

var coche3 = new coche('Volvo', 'C-hr', '2017', 'plata');

var coche4 = new coche('Ford', 'fiesta', '2001', 'blanco');
 
var coche5 = new coche('Seat', 'Leon', '2005', 'Blanco');

var coche6 = new coche('Seat', 'Panda', '1997', 'plata');

var coche7 = new coche('Audi', 'A-3', '2020', 'negro');
 
var coche8 = new coche('Honda', 'Civic', '2007', 'azul');

var coche9 = new coche('Peugeot', '206', '2007', 'blanco');

var coche10 = new coche('Renault', 'Clio', '1999', 'negro');





//funciona//
