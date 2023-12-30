// Crie uma função que calcule a área do retângulo. 
// O nome da função deve ser rectangleArea, 
// que recebe como parâmetro dois valores, seu comprimento length e sua largura width.

// A função deve mostrar no console a área do retângulo com a seguinte frase:
// The area of rectangle is XXX.


function rectangleArea (length, width) {
    const area = length * width;
    return area;
}

console.log ("The area of rectangle is " + rectangleArea(5, 7) + " m².");

let areaOfRectangle = rectangleArea (3, 5);
console.log ("The area of rectangle is " + rectangleArea(3, 5) + " m².");
