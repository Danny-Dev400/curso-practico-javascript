console.log("hola mundo")

// funciones para cuadrado
function perimetroCuadrado(lado){ return lado*4;}

function areaCuadrado(lado){ return lado**2}

// funciones para triangulo

perimetroTriangulo = (lado1, lado2, lado3) => { return lado1+lado2+lado3; }

areaTriangulo = (base, altura) =>  (base*altura)/2 ;

//funciones circulo

getDiametro = (radio) => radio*2;

perimetroCirculo = (radio) => { 
    let num = getDiametro(radio) * Math.PI 
    return num.toFixed(2)
};

areaCirculo = (radio) => { 
    return (radio * Math.PI * (radio ** 2)).toFixed(2);
}


console.group("cuadrados");
console.log(`Perimetro del cuadrado: ${perimetroCuadrado(5)}`)
console.log(`Area del cuadrado: ${areaCuadrado(5)}`)
console.groupEnd();

console.group("Info Triangulo");
console.log(`Perimetro del triangulo: ${perimetroTriangulo(6,6,4)}`)
console.log(`Area del triangulo: ${areaTriangulo(5,6)}`)
console.groupEnd()

console.group("Info Circulo");
console.log(`Perimetro del triangulo: ${perimetroCirculo(5)}`)
console.log(`Area del circlo: ${areaCirculo(5)}`)
console.groupEnd()