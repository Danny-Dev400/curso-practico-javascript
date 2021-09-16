let navbarS = document.querySelector('#square');
let navbarC = document.querySelector('#circle');
let navbarT = document.querySelector('#triangle');

// funciones para cuadrado
function perimetroCuadrado(lado){ return lado*4;}
function areaCuadrado(lado){ return lado**2;}

// funciones para triangulo

perimetroTriangulo = (lado1, lado2, lado3) => { return lado1+lado2+lado3; }
areaTriangulo = (base, altura) =>  { return (base*altura)/2 };

//funciones circulo

getDiametro = (radio) => radio*2;
perimetroCirculo = (radio) => { 
    let num = getDiametro(radio) * Math.PI 
    return num.toFixed(2)
};
areaCirculo = (radio) => { 
    return (radio * Math.PI * (radio ** 2)).toFixed(2);
}

//canbiar canvas

activateSquare = () =>{
    let mainContainer = document.querySelector(".content")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = `
    <div class="formSection">
        <h2>¡Calcula el area y perimetro <br>de un cuadrado!</h2>
        <p>Introduce el valor de uno de los lados del cuadrado y dale calcular para ver el resultado</p>
        <div class="formSquare">
            <span>lado</span><br>
            <input type="text" name="" id="inputSquare"> <br>
            <button onclick="calculateSquare()" > calcular </button>
        </div>
    </div>
    <div class="imageSection">
        <img src="./images/contorno-de-forma-cuadrada.png" alt="">
        <div class="responses">
            <p id="perimetro">El perimetro es: 40</p>
            <p id="area">El area es: 40</p>
        </div>
    </div>
    `;
}

activateCircle = () =>{
    let mainContainer = document.querySelector(".content")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = `
    <div class="formSection">
        <h2>¡Calcula el area y perimetro <br>de un circulo!</h2>
        <p>Introduce el valor del radio del circulo y dale calcular para ver el resultado</p>
        <div class="formSquare">
            <span>Radio</span><br>
            <input type="text" name="" id="inputCircle"> <br>
            <button onclick="calculateCircle()" > calcular </button>
        </div>
    </div>
    <div class="imageSection">
        <img src="./images/dry-clean.png" alt="">
        <div class="responses">
            <p id="perimetro">El perimetro es: 40</p>
            <p id="area">El area es: 40</p>
        </div>
    </div>
    `;
}

activateTriangle = () =>{
    let mainContainer = document.querySelector(".content")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = `
    <div class="formSection">
        <h2>¡Calcula el area y perimetro <br>de un triangulo!</h2>
        <p>Introduce el valor de los lados y base del trianglo, acompañado de su altura y dale calcular para ver el resultado</p>
        <div class="formTriangle">
            <div class="form-group">
                <div>
                    <span>lado 1</span><br>
                    <input type="text" name="" id="inputSide1"> 
                </div>
                <div>
                    <span>lado 2</span><br>
                    <input type="text" name="" id="inputSide2"> <br>
                </div>
            </div>
            <div class="form-group">
                <div>
                    <span>Base</span><br>
                    <input type="text" name="" id="inputBase"> 
                </div>
                <div>
                    <span>Altura</span><br>
                    <input type="text" name="" id="inputHight"> <br>
                </div>
            </div>
            <button onclick="calculateTriangle()" > calcular </button>
        </div>
    </div>
    <div class="imageSection">
        <img src="./images/triangle-outline-variant.png" alt="">
        <div class="responses">
            <p id="perimetro">El perimetro es: 0</p>
            <p id="area">El area es: 0</p>
        </div>
    </div>
    `;
}

navbarS.addEventListener("click", activateSquare)
navbarC.addEventListener("click", activateCircle)
navbarT.addEventListener("click", activateTriangle)

calculateSquare = () => {
    let side = document.querySelector('#inputSquare').value;
    let perimeter = document.getElementById('perimetro');
    let area = document.getElementById('area');

    perimeter.innerHTML = `El perimetro es: ${perimetroCuadrado(side)}`;
    area.innerHTML = `El area es: ${areaCuadrado(side)}`;
}

calculateCircle = () => {
    let radio = document.querySelector('#inputCircle').value;
    let perimeter = document.getElementById('perimetro');
    let area = document.getElementById('area');

    perimeter.innerHTML = `El perimetro es: ${perimetroCirculo(radio)}`;
    area.innerHTML = `El area es: ${areaCirculo(radio)}`;
}

calculateTriangle = () => {
    let side1 = document.querySelector('#inputSide1').value;
    let side2 = document.querySelector('#inputSide2').value;
    let base = document.querySelector('#inputBase').value;
    let hight = document.querySelector('#inputHight').value;
    let perimeter = document.getElementById('perimetro');
    let area = document.getElementById('area');

    perimeter.innerHTML = `El perimetro es: ${perimetroTriangulo(Number(side1),Number(side2),Number(base))}`;
    area.innerHTML = `El area es: ${areaTriangulo(base,hight)}`;
}