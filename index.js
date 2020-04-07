var nota1 = parseFloat(prompt("Digite su primera nota:"));
var nota2 = parseFloat(prompt("Digite la segunda nota:"));

var prom = (nota1 + nota2) / 2;
        
if (nota1, nota2 >= 0 && nota1, nota2 <= 5)
{
    if (prom >= 4.5) 
    {
        prom = 5
        document.write("Usted ganó la materia con: <br>" + prom);
    }
    else if (prom >= 3) 
    {
        ocument.write("Usted ganó la materia con: <br>" + prom);
    }
    else 
    {
        document.write("Usted perdió la materia con: <br>" + prom);
    }
}
else
{
    document.write("Las notas ingresadas no son validas.");
}
