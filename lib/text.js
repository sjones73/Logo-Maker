class Text {
    // properties
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

    // methods
    render() {
        return `<text x="150" y="115" font-size="50" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}

module.exports = Text;