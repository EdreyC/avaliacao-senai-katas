function ohce(word:string){

    let wordReverse = word.split("").reverse().join("")
    if( wordReverse == word){
        return 'Gostei da palavra!'
    }
    else{
        return wordReverse
    }

}

export default ohce;