class Shape { //Parent Class
   constructor() {
      this.shapeColor = ""
   }

   setShapeColor(shapeColor){
      this.shapeColor = shapeColor;
   }   
};

class Triangle extends Shape { //Child class for individual shapes
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}
class Circle extends Shape {
   render() {
     return `<circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />`;
   }
 }
 
 class Square extends Shape {
   render() {
     return `<rect width="120" height="120" x="90" y="40" fill="${this.shapecolor}" />`;
   }
 }

//https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_myfirst (SVG Tester)

module.exports = Circle, Triangle, Square; //Exporting shapes to index.js