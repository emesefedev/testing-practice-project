export function capitalize(str) {
    const firstCharacter = str.charAt(0)
    const restOfString = str.slice(1)

    return `${firstCharacter.toUpperCase()}${restOfString}`
} 