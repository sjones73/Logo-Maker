class Circle {
    // properties
    constructor(color) {
        this.color = color;
    }

    // methods
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}


// class Circle {
//     // properties
//     constructor(color) {
//         this.color = color;
//     }

//     // methods
//     render() {
//         return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
//     }
// }

// TRIANGLE
class Triangle {
    // properties
    constructor(color) {
        this.color = color;
    }

    // methods
    render() {
        return `<polygon points="150,0 50,200 250,200" fill="${this.color}"/>`
    }
}

// SQUARE
class Square {
    // properties
    constructor(color) {
        this.color = color;
    }

    // methods
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`
    }
}

// module.exports = { Circle, Triangle, Square};
module.exports = {Circle, Triangle, Square};