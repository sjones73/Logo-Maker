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
        return `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/> fill=${this.color}"/>`
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
        return `<rect x="10" y="10" width="30" height="30"/> fill="${this.color}"/>`
    }
}

// module.exports = { Circle, Triangle, Square};
module.exports = {Circle, Triangle, Square};