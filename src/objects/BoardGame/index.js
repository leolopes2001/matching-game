import CardGame from "../../components/CardName"

export default function BoardGame(cards) {
    
    

  const $htmlCardGame = CardGame().repeat(cards)


  console.log($htmlCardGame)

  return $htmlCardGame
}
