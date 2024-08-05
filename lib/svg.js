class SVG {
  constructor() {
    this.text = '';
    this.shape = '';
  }
  render() {
    return`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
  }
  setText(message, color){
    if(message.length >3) {
        throw new Error('Must not exceed 3 characters');
    }
    this.sha
  }
}



module.exports = SVG;
