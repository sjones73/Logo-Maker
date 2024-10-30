class Text {
    // properties
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

    // methods
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}

module.exports = Text;