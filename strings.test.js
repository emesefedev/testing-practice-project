import { capitalize } from "./strings.js"

describe("The capitalize() function", () => {
    test("Returns the first character capitalized of word in lower case", () => {
        expect(capitalize("project")).toBe("Project")
    })
    
    test("Returns the first character capitalized of word in upper case", () => {
        expect(capitalize("MATHS")).toBe("MATHS")
    })
    
    test("Returns the first character capitalized of sentence starting with upper case", 
        () => {
            expect(capitalize("Testing practice")).toBe("Testing practice")
    })
    
    test("Returns the first character capitalized of sentence starting with lower case", 
        () => {
            expect(capitalize("javascript rules!")).toBe("Javascript rules!")
    })
})