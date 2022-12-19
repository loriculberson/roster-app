function Favorites(props) {
  const list = props.data.map((item, index) => <li key={index}>{item}</li>)
  
  const favoriteMessage = props.data.length  ? 
   (
    <>
      <h2>My Favorites</h2>
        <ol>
          {list}
        </ol>
    </>
  ) : <p>Click a player to add to favorites!</p>

  return favoriteMessage
}

export default Favorites