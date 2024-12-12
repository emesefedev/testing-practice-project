import { caesarCipher } from "./caesar.js"

describe.skip("The divide() function", () => {
    test("Caesar Cipher for xyz with step 3", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc")
    })
    
    testg("Caesar Cipher with case preservation", () => {
        expect(caesarCipher("Xyz", 3)).toBe("Abc")
    })
    
    test("Caesar Cipher with punctuation", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
    })
})

