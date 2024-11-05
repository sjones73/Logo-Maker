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

    test("Circle can render the code for the circle shape when rendered", () => {
         // test value initialization
         const testColor = "blue";

         // process that we want to test
         const shapeObj = new shape.Circle(testColor)
 
         // conclusion
         expect(shapeObj.render()).toBe(`<circle cx="150" cy="100" r="80" fill="${testColor}"/>`)
    })

})


