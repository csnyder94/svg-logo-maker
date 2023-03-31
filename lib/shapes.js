class Shape {
   constructor() {
      this.text = "";
      this.textColor = ""
      this.shapeColor = ""
   }

   setText(param){
      this.text = param;
   }

   setTextColor(param){
      this.textColor = param;
   }

   setText(param){
      this.shapeColor = param;
   }   
};

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

const shape = new Triangle();
console.log(shape)
shape.setText ("This is a test");
shape.setTextColor("Blue");
shape.setShapeColor("Red");
console.log(shape);
console.log(shape.text);
shape.render();

module.exports = Triangle;