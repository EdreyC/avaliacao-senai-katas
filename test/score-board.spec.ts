import { ScoreKeeper } from "../src/score-board"


describe("ScoreKeeper",()=>{

    const scoreKeeper = new ScoreKeeper()
  

    test("Deve retornar 10 pontos pro time A e 20 para o time B",()=>{
        scoreKeeper.scoreTeamA3()
        scoreKeeper.scoreTeamB3()
        let response = scoreKeeper.getScore()
        expect(response).toBe("003:003")
    })

    
    test("Se os pontos de qualquer dos dois times forem maior que 999, então os pontos vão travar em 999",()=>{
        scoreKeeper.teamA = 1000;
        scoreKeeper.teamB = 1000;
        let response = scoreKeeper.getScore()
        expect(response).toBe("Cannot be above 999")
    })
}) 