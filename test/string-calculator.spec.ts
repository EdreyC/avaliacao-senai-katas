import stringCalculator from "../src/string-calculator"; 

describe("Calculador de string", ()=>{

    const stringWithout1000 = "1,2,999"
    const stringWith1000 = "1,2,999,1000,2000"
    
    test("Deve retornar a soma das strings",()=>{
        const response = stringCalculator(stringWithout1000)
        expect(response).toBe(1002)
    })
    test("Deve retornar a soma das strings ignorando números acima de 1000",()=>{
        const response = stringCalculator(stringWith1000)
        expect(response).toBe(1002)
    })
})