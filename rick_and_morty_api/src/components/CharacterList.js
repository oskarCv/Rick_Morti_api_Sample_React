import {useEffect, useState} from "react";
import {getCharacters} from "../service/service";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(()=>{
    const fetchChracterData = async () => {
      const response = await getCharacters();
      setCharacters(response.data.results);
    }
    fetchChracterData();
  },[]);
  return (
    <div className="container bg-danger">
        {
        characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
                <Character character={character}/>
            </div>
          );
        })
      }
    </div>
  )
}

export default CharacterList