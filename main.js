let num = parseInt(document.getElementById('numero').value);
let submit = document.getElementById('submit');
let sequenciaFibonacci = document.getElementById('sequencia-fibonacci');

function calculaFibonacci(num) {
    let a = 0;
    let b = 1;
    const array = [];

    for(let i = 0; i < num; i++) {
        let c = a + b;
        array.push(a);
        b = a;
        a = c;
    }
    
    return array;
}

console.log(calculaFibonacci(3))