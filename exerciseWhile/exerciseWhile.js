
var c = document.getElementById("dibujito"); //Obtenemos el canvas del HTML
var lienzo = c.getContext("2d"); //Obtenemos el contexto dimensional del canvas
var ancho = c.width; // Obetenemos el ancho del canvas

function trazo(color, x_inicial, y_inicial, x_final, y_final) //Funcion a utilizar para cada trazo
{
    lienzo.beginPath(); //Inicializamos el canvas
    lienzo.strokeStyle = color; //Elegimos el color de la linea
    lienzo.moveTo(x_inicial, y_inicial); //Le pasamos la coordenada inicial
    lienzo.lineTo(x_final, y_final); // Le pasamos la coordenada final
    lienzo.stroke(); //Levantamos el trazo
    lienzo.closePath(); //Cerramos el canvas
}

function dibujar() //Disparar el dibujo entero
{
    var lineas = 30;
    var espacio = ancho / lineas; //Definimos el espacio entre linea y linea
    var l = 0;
    var yi, xf; //Definimos las variables necesarias en el trazo

    while (l < lineas)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        trazo("black", 0, yi, xf, 300);
        l++;
    }
}

dibujar(); //Invocamos la funcion3