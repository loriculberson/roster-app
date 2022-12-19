import Player from './Player'

function PlayerList(props) {
  const { data, addToFavorites } = props
  const list = data.map(roster => {
    return <Player key={roster.id} player={roster} addToFavorites={addToFavorites} />
  })
  
  return (
    <>
      {list}
    </>
  )
}

export default PlayerList