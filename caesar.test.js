import { caesarCipher } from "./caesar.js"

test.only("Caesar Cipher for xyz with step 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
})

test.only("Caesar Cipher with case preservation", () => {
    expect(caesarCipher("Xyz", 3)).toBe("Abc")
})