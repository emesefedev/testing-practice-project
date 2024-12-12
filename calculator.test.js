import { calculator } from "./calculator.js"

describe.skip("Calculator contains functions for the basic operations", () => {
    test("Calculator contains add function", () => {
        expect(calculator.add()).toBeDefined()
    })
    
    test("Calculator contains subtract function", () => {
        expect(calculator.subtract()).toBeDefined()
    })
    
    test("Calculator contains multiply function", () => {
        expect(calculator.multiply()).toBeDefined()
    })
    
    test("Calculator contains divide function", () => {
        expect(calculator.divide()).toBeDefined()
    })
})

describe.skip("The add() function", () => {
    test("Add function returns correct calculation for positive addends", 
        () => {
            expect(calculator.add(1, 2)).toBe(3)
    })
    
    test("Add function returns correct calculation for negative addends", 
        () => {
            expect(calculator.add(-12, -13)).toBe(-25)
    })
    
    test("Add function returns correct calculation for positive and negative addends - Case 1", 
        () => {
            expect(calculator.add(11, -4)).toBe(7)
    })
    
    test("Add function returns correct calculation for positive and negative addends - Case 1", 
        () => {
            expect(calculator.add(-14, 9)).toBe(-5)
    })
})

describe.skip("The subtract() function", () => {
    test("Subtract function returns correct calculation for positive minuend and subtrahend", 
        () => {
            expect(calculator.subtract(8, 6)).toBe(2)
    })
    
    test("Subtract function returns correct calculation for negative minuend and subtrahend", 
        () => {
            expect(calculator.subtract(-20, -16)).toBe(-4)
    })
    
    test("Subtract function returns correct calculation for positive minuend and negative subtrahend", 
        () => {
            expect(calculator.subtract(21, -14)).toBe(35)
    })
    
    test("Subtract function returns correct calculation for negative minuend and postive subtrahend", 
        () => {
            expect(calculator.subtract(-22, 18)).toBe(-40)
    })
})

describe.skip("The multiply() function", () => {
    test("Multiply function returns correct calculation for positive factors", 
        () => {
            expect(calculator.multiply(7, 3)).toBe(21)
    })
    
    test("Multiply function returns correct calculation for negative factors", 
        () => {
            expect(calculator.multiply(-2, -4)).toBe(8)
    })
    
    test("Multiply function returns correct calculation for positive and negative factors - Case 1", 
        () => {
            expect(calculator.multiply(-6, 8)).toBe(-48)
    })
    
    test("Multiply function returns correct calculation for positive and negative factors - Case 2", 
        () => {
            expect(calculator.multiply(19, -1)).toBe(-19)
    })
})

describe.skip("The divide() function", () => {
    test("Divide function returns correct calculation", () => {
        expect(calculator.divide(10, 5)).toBe(2)
    })

    test("Can't divide by 0", () => {
        expect(() => calculator.divide(1, 0)).toThrow(Error)
    })
})
