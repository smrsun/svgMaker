class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.tColor = textColor;
    this.fill = shapeColor;
  }
}

class Circle extends Shape {
  render() {
    return `
       <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <circle cx="150" cy="100" r="80" fill="${this.fill}" />
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tColor}">${this.text}</text>
       </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `
       <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <polygon points="150, 18 244, 182 56, 182" fill="${this.fill}"/> 
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tColor}">${this.text}</text>
       </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `
       <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <rect x="10" y="10" width="30" height="30"/>
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tColor}">${this.text}</text>
       </svg> `;
  }
}
// const circle =  new Circle('ABC', 'pink', 'blue')

// console.log(circle.render());

module.exports = { Circle, Triangle, Square };
