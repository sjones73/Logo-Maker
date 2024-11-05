const shape = require("../lib/shapes.js")


// TESTS FOR THE CIRCLE
describe("Tests for the Circle class", () => {

    test("Circle class will create a Circle object that has the correct color", () => {
        // test value initialization
        const testColor = "blue";

        // process that we want to test
        const shapeObj = new shape.Circle(testColor)

        // conclusion
        expect(shapeObj.color).toBe(testColor)
    })

    test("Square can render the code for the square shape when rendered", () => {
         // test value initialization
         const testColor = "blue";

         // process that we want to test
         const shapeObj = new shape.Square(testColor)
 
         // conclusion
         expect(shapeObj.render()).toBe(`<rect x="50" y="0" width="200" height="200" fill="${testColor}"/>`)
    })

    test("triangle can render the code for the triangle shape when rendered", () => {
        // test value initialization
        const testColor = "blue";

        // process that we want to test
        const shapeObj = new shape.Triangle(testColor)

        // conclusion
        expect(shapeObj.render()).toBe(`<polygon points="150,0 50,200 250,200" fill="${testColor}"/>`)
   })


})


