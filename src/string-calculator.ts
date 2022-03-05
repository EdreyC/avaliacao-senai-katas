function stringCalculator(numbers:string){
    let numbersArrayString = numbers.split(",")
    let numbersArrayNumber = numbersArrayString.map(Number)
    let initialValue = 0;

    for( let i = 0; i < numbersArrayNumber.length; i++){ 
                                   
        if ( numbersArrayNumber[i] >= 1000 || numbersArrayNumber[i] < 0) { 
            
            numbersArrayNumber.splice(i, 1); 
            i--; 
        }
        // if (numbersArrayNumber[i] >= 1000) {
        //     numbersArrayNumber.splice(i,1)
        //     i--;
        //     console.log("Cannot be above 1000")
                    
        // }
        // if (numbersArrayNumber[i] < 0) {
        //     numbersArrayNumber.splice(i,1)
        //     i--;
        //     console.log("Cannot be below 0")
            
        }
        
    
    let sumArrayNumbers = numbersArrayNumber.reduce((previousValue, currentValue) =>  previousValue + currentValue, initialValue)

    return sumArrayNumbers


    // let sumArrayNumbers = numbersArrayNumber.reduce((previousValue, currentValue) => {
        
    //     if (currentValue < 0) {
           
    //     }
    //      if(currentValue < 1000){
    //          previousValue + currentValue

    //      }
    //      else{
    //          return previousValue;
    //      }

    
    //     },
    // initialValue)





}
const response = stringCalculator("1,-2,1000")
console.log(response)
export default stringCalculator 