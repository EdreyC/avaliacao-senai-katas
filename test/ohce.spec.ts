import ohce from "../src/ohce"

describe("Função Ohce",()=>{
    const wordPalindrome = "ana"
    const wordNotPalindrome = "casa"

    test("Deve retornar 'Gostei da palavra' se for palíndromo",()=>{
        const response = ohce(wordPalindrome)
        expect(response).toBe("Gostei da palavra!")
    })
    
    test("Deve retornar a palavra invertida caso não for palíndromo",()=>{
        const response = ohce(wordNotPalindrome)
        expect(response).toBe("asac")
    })
}) 