import { useEffect, useState } from "react";
import {getCharacters} from "./service/service";
function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(()=>{
    const fetchChracterData = async () => {
      const response = await getCharacters();
      setCharacters(response.data.results);
      console.log('ocv response -> ', response.data.results);
    }
    fetchChracterData();
  },[]);
  return (
    <div>
      <h1>Rick and Morty</h1>
      {
        characters.map((character) => {
          return (
            <div key={character.id}>
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
