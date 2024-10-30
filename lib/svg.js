class SVG {
    // properties
    constructor(shapeCode, textCode) {
        this.shapeCode = shapeCode;
        this.textCode = textCode;
    }


    // methods
    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

         ${this.shapeCode}

         ${this.textCode}

         </svg>
        `
    }
}

module.exports = SVG;