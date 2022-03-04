export class ScoreKeeper{
    
    public teamA = 0;
    public teamB = 0;

 
    public scoreTeamA1(){
        return this.teamA = this.teamA + 1 
    }
    public scoreTeamA2(){
        return this.teamA = this.teamA + 2
    }
    public scoreTeamA3(){
        return this.teamA = this.teamA + 3
    }
    public scoreTeamB1(){
        return this.teamB = this.teamB + 1 
    }
    public scoreTeamB2(){
        return this.teamB = this.teamB + 2
    }
    public scoreTeamB3(){
        return this.teamB = this.teamB + 3 
    }

     public getScore(){
        
        let placarA = `000`
        let placarB = `000`

        if (this.teamA > 9) {
            placarA  = `0${this.teamA}`
           
        }
        if (this.teamA <= 9) {
            placarA  = `00${this.teamA}`
           
        }
       
        if (this.teamA > 99) {
            placarA  = `${this.teamA}`
          
        }
        if(this.teamA > 999){
            this.teamA = 999
            placarA = `${this.teamA}`
            return "Cannot be above 999"

        }

        //Condições do time B

        if (this.teamB <= 9) {
            placarB  = `00${this.teamB}`
            
        }
        if (this.teamB > 9) {
            placarB  = `0${this.teamB}`
           
        }
        if (this.teamB > 99) {
            placarB  = `${this.teamB}`
       
        }
        if(this.teamB > 999){
            this.teamB = 999
            placarB = `${this.teamB}`
            return "Cannot be above 999"
        }
        
        return `${placarA}:${placarB}`
    }
}
