const Square = require("./Square");
const Rectangle = require("./Rectangle");
let figures = [new Square(2),new Square(5), new Square(10), new Rectangle(5,3), new Rectangle(10,4)];



// bei console.log(figure) darf kein zusätzliches Zeichen dabeistehen
for(let figure of figures){
    console.log(figure);
    console.log("Fläche: "+figure.getArea());
    console.log("Umfang: "+figure.getCircumference());
    console.log();

}