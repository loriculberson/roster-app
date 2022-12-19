function Player(props) {
  const { player, addToFavorites } = props



  /*
  if player has hobbies -> display hobbies
  else display "no hobbies listed"

  statement ? do this : do that
  */
  // const hobbies = player.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)
  // Conditional Rendering
  const hobbies = player.hobbies.length 
                  ? player.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)
                  : <p>No hobbies listed</p>
 
  const playerName =`${player.firstName} ${player.lastName}`
  return (
    <div key={player.id}>
      <h3 onClick={() => addToFavorites(playerName)}>
        {player.firstName} {player.lastName}
      </h3>
      <ul>{hobbies}</ul>
    </div>
  )
}

export default Player