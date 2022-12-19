import { useState} from 'react'
import Welcome from './components/Welcome'
import PlayerList from './components/PlayerList'
import Favorites from './components/Favorites'
import { playerData } from './data/playerData'

function App() {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (name) => {
   if (!favorites.includes(name)) {
     const updatedFavorites = [...favorites, name]
     setFavorites(updatedFavorites)
   }
  }
  return (
    <div className="container">
      <Welcome />
      <PlayerList data={playerData} addToFavorites={addToFavorites} />
      <Favorites data={favorites} />
    </div>
  );
}

export default App;
