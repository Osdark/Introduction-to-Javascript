/* Vamos a calcular tu peso en los demas planetas
   del sistema solar.*/

var option = document.getElementById("option");
var text = document.getElementById("peso");
var button = document.getElementById("botoncito");
var result = document.getElementById("result");

button.addEventListener("click", calcularPeso);

function calcularPeso()
{
    var option1 = option.value;
    var pesoTierra = text.value;

    switch (option1)
    {
        case "1":

            var pesoMercurio = (pesoTierra * 3.7) / 9.8;
            result.innerHTML = "Su peso en mercurio es de: " + pesoMercurio;
            break;
        
        case "2":
            
            var pesoVenus = (pesoTierra * 8.87) / 9.8;
            result.innerHTML = "Su peso en venus es de: " + pesoVenus;
            break;

        case "3":

            var pesoMarte = (pesoTierra * 3.7) / 9.8;
            result.innerHTML = "Su peso en marte es de: " + pesoMarte;
            break;

        case "4":
            
            var pesoJupiter = (pesoTierra * 24.8) / 9.8;
            result.innerHTML = "Su peso en jupiter es de: " + pesoJupiter;
            break;

        case "5":

            var pesoSaturno = (pesoTierra * 10.44) / 9.8;
            result.innerHTML = "Su peso en saturno es de: " + pesoSaturno;
            break;

        case "6":

            var pesoUrano = (pesoTierra * 8.7) / 9.8;
            result.innerHTML = "Su peso en urano es de: " + pesoUrano;
            break;

        case "7":

            var pesoNeptuno = (pesoTierra * 11,15) / 9.8;
            result.innerHTML = "Su peso en neptuno es de: " + pesoNeptuno;
            break;

        default:

            result.innerHTML = "Usted ingresó una opcion no valida."

    }
}