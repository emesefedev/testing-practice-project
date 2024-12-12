import { caesarCipher } from "./caesar.js"

test.skip("Caesar Cipher for xyz with step 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
})

test.skip("Caesar Cipher with case preservation", () => {
    expect(caesarCipher("Xyz", 3)).toBe("Abc")
})

test("Caesar Cipher with punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})