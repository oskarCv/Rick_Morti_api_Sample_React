import { useEffect, useState } from "react";
import { getCharacters } from "../service/service";
import Character from "./Character";
import Nav from "./Nav";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchChracterData = async () => {
      const response = await getCharacters(page);
      setLoading(false);
      setCharacters(response.data.results);
    };
    fetchChracterData();
  }, [page]);

  return (
    <div className="container">
      <Nav page={page} setPage={setPage}/>
      {loading ? (
        <h1> Loading ..... </h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
