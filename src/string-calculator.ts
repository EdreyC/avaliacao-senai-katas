function stringCalculator(numbers:string){
    let numbersArrayString = numbers.split(",")
    let numbersArrayNumber = numbersArrayString.map(Number)
    let initialValue = 0;
  

    for( let i = 0; i < numbersArrayNumber.length; i++){ 
                                   
        if ( numbersArrayNumber[i] >= 1000) { 
            numbersArrayNumber.splice(i, 1); 
            i--; 
        }
    }

    let sumArrayNumbers =numbersArrayNumber.reduce((previousValue, currentValue) => previousValue + currentValue,
    initialValue)
    return sumArrayNumbers

}
export default stringCalculator