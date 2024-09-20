//1.Calcule o MDC (máximo divisor comum) entre dois números.


function calcularMDC(a, b) {
    if (b === 0) {
        return a;
    }
    return calcularMDC(b, a % b);
}


console.log(calcularMDC(50, 120));