// RETO: CALCULADORA BÁSICA
function calcular() {
 // 1. Obtener valores
   let num1 = parseFloat(document.getElementById("num1").value);
   let num2 = parseFloat(document.getElementById("num2").value);
   let operacion = document.getElementById("operacion").value;
 // 2. Validar entrada
   if (isNaN(num1) || isNaN(num2)) {
   document.getElementById("resultado").innerHTML =
   "❌ Ingresa números válidos";
   return;
   }
 // 3. Calcular según operación
   let resultado;
   switch(operacion) {
   case "suma":
   resultado = num1 + num2;
   break;
   case "resta":
   resultado = num1 - num2;
   break;
   case "multiplicar":
   resultado = num1 * num2;
   break;
   case "dividir":
   if (num2 === 0) {
   document.getElementById("resultado").innerHTML =
   "❌ No se puede dividir por cero";
   return;
   }
   resultado = num1 / num2;
   break;
   }
 // 4. Mostrar resultado
   document.getElementById("resultado").innerHTML = 
   `Resultado: ${resultado.toFixed(2)}`;
}