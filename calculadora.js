// Crearemos  un calculadora para comprobar si un año es bisiesto o no .las condiciones a cumplir de un año bisiesto son que : es divisible por 4   no es divisible por 100 no es divisible por 400  finalmente ,se debe imprimir por pantalla si es bisiesto , o no lo es.

function verificarBisiesto() {

    const yearInput = document.getElementById('yearInput').value;
    const year = parseInt(yearInput);

    const esBisiesto = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    const resultadoElement = document.getElementById('result');
    resultadoElement.textContent = esBisiesto ? `${year} es un año bisiesto.` : `${year} no es un año bisiesto.`;
}

// 2.-Crea una función llamada  calculadora que tendrá 3 parámetros -un string llamada operación y dos números llamados “x” e “y entonces la string nos indicara el tipo de operación  que se llevara a cabo  entre “x” e “y” , es decir ,si operación es igual a “sumar”,”x” e “y” se van a sumar … esto lo tenemos que hacer con suma ,resta ,multiplicacion,division,exponenciacion y residuo, encaso de que el valor de operación ni corresponda con ninguno de estos , la función devolverá “-1”.

function calcular(operacion, x, y) {
    switch (operacion.toLowerCase()) {
        case 'sumar':
            return x + y;
        case 'restar':
            return x - y;
        case 'multiplicar':
            return x * y;
        case 'dividir':
            return y !== 0 ? x / y : 'Error: División por 0';
        case 'exponenciacion':
            return Math.pow(x, y);
        case 'residuo':
            return x % y;
        default:
            return -1;
    }
}


console.log(calcular('sumar', 5, 3));
console.log(calcular('restar', 8, 2));
console.log(calcular('multiplicar', 4, 6));
console.log(calcular('dividir', 9, 3));
console.log(calcular('dividir', 5, 0));
console.log(calcular('exponenciacion', 2, 3));
console.log(calcular('residuo', 10, 3));
console.log(calcular('otraOperacion', 2, 4));

// 3 vamos a crear dos variables, una va ser string(nombre) y la otra un numero [cantidad], el nombre de producto puede ser, juntamente con su precio: -refresco 1,00 soles -cerveza 2.50 soles -papitas 5.00 soles según la cantidad y el nombre del producto especificados, vamos a tener que calcular el precio total del pedido.

function calcularPrecioTotal(nombre, cantidad) {

    const precios = {
        refresco: 1.00,
        cerveza: 2.50,
        papitas: 5.00
    };

    const producto = nombre.toLowerCase();

    if (precios.hasOwnProperty(producto)) {

        const precioUnitario = precios[producto];
        const precioTotal = precioUnitario * cantidad;

        return `El precio total por ${cantidad} ${nombre}(s) es: ${precioTotal.toFixed(2)} soles.`;
    } else {
        return `Lo siento, el producto ${nombre} no está en la lista.`;
    }
}

console.log(calcularPrecioTotal('refresco', 3));
console.log(calcularPrecioTotal('cerveza', 2));
console.log(calcularPrecioTotal('papitas', 1));
console.log(calcularPrecioTotal('helado', 2));