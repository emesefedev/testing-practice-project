const punctuationMin = 32
const punctuationMax = 57

const upperMin = 65
const upperMax = 90

const lowerMin = 97
const lowerMax = 122

export function caesarCipher(str, step) {
    const strArray = str.split("")
    const unicodes = strArray.map((c) => c.codePointAt())

    const ciphered = unicodes.map((u) => cipherChar(u, step))
    
    
    const cipheredChars = ciphered.map((u) => String.fromCodePoint(u))

    return cipheredChars.join("")
}

function cipherChar(unicode, step) {
    if (unicode >= upperMin && unicode <= upperMax)
        return cipherUpperChar(unicode, step)
    
    if (unicode >= lowerMin && unicode <= lowerMax)
        return cipherLowerChar(unicode, step)

    if (unicode >= punctuationMin && unicode <= punctuationMax)
        return unicode

    throw new Error("No letter or punctuation")
}

function cipherLowerChar(unicode, step) {
    const rawResult = unicode + step

    if (rawResult > lowerMax) {
        const extra = rawResult - lowerMax
        return lowerMin + (extra - 1)
    }

    return rawResult
}

function cipherUpperChar(unicode, step) {
    const rawResult = unicode + step

    if (rawResult > upperMax) {
        const extra = rawResult - upperMax
        return upperMin + (extra - 1)
    }

    return rawResult
}