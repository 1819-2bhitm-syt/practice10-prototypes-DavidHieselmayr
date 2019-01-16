/*function Square(length){
    this.length = length;

    this.getArea = function () {
        return this.length * this.length;
    };

}
erster Schritt
*/

function Square(length){
    this.length = length;
}

Square.prototype.getArea = function () {
    return this.length * this.length;
};
Square.prototype.getCircumference= function(){
    return 2*(this.length+this.length);
};

module.exports = Square;