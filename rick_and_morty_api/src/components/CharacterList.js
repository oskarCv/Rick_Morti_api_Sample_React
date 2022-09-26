import {useEffect, useState} from "react";
import {getCharacters} from "../service/service";
import Character from "./Character";

function CharacterList() {
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
        {
        characters.map((character) => {
          return (
            <Character key={character.id} character={character}/>
          );
        })
      }
    </div>
  )
}

export default CharacterList