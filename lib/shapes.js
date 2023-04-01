class Shape { //Parent Class for shapes
   constructor() {
      this.shapeColor = ""
   }

   setShapeColor(shapeColor){ //Method to set shape color
      this.shapeColor = shapeColor;
   }   
};

class Triangle extends Shape { //Child class for individual shape
    render() { //Method to render triangle
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />` 
    }
}

class Circle extends Shape {
   render() { //Method to render circle
     return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
   }
 }

 class Square extends Shape {
   render() { //Method to render square
     return `<rect width="120" height="120" x="90" y="40" fill="${this.shapeColor}" />`; 
   }
 }


 class finalShapeRender { //Parent Class for final SVG logo
   constructor (){ //Constructor to initialize class properties
       this.textSVG = "";
       this.shapeSVG = "";
   }

   render(){  //Method to render the final SVG logo
       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeSVG}${this.textSVG}</svg>`
   }
   //https://github.com/w3c/svgwg/ (Credit for above template)

   setText(text,textColor){ //Method to set text input for logo
       this.textSVG = `<text x="150" y="110" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`
   }

   setShape(shape){ //Method to set shape input for logo
       this.shapeSVG = shape.render() //Gets the rendered shape from the Shape classes and set the shape input
   }
}

//https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_myfirst (SVG Tester)

module.exports = {Circle, Triangle, Square, finalShapeRender}; //Exporting individual shapes to index.js