console.log('Ejemplo de POO');

//El nombre de las clase inician en Mayúsculas
class Rectangulo {
    // base = 1;
    // altura = 2;
    //Metodo default constructor
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        console.log('Desde el método constructor');
        this.area();
    }
    //Métodos
    area() {
        // const base = 1;
        // const altura = 1;
        return this.base * this.altura
    }

    perimetro() {
        return this.base * 2 + this.altura * 2
    }
}

// Instanciar
let rectanguloUno = new Rectangulo(1,2);
console.log(rectanguloUno);
console.log(rectanguloUno.area());
console.log(rectanguloUno.perimetro());
//DOM
document.getElementById('respuesta').innerHTML = rectanguloUno.area()