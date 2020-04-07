/* Vamos a imprimir una lista de 100
   numeros con la condicion de que
   si el numero es divisible entre 3
   entonces escribale al lado un "Fizz",
   y si es divisible entre 5 entonces
   escribale un "Buzz".
*/

var divisible = false;

function esDivisible(num, divisor)
{
    if (num % divisor == 0)
    {
        return true;
    }

    else
    {
        return false;
    }
}

for (var i = 1; i <= 100; i++)  //10
{
    if (!esDivisible(i,3) && !esDivisible(i,5))
    {
        document.write(i);
    }

    if (esDivisible(i,3) && esDivisible(i,5))
    {
        document.write(i + " Fizz Buzz");
    }

    else
    {
        if (esDivisible(i,3))
       {
            document.write(i + " Fizz");
       }

       if (esDivisible(i,5))
       {
            document.write(i + " Buzz");
       }
    }
    
    document.write("<br>")
}