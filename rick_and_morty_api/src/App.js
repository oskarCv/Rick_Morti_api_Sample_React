import { useEffect } from "react";
import {getCharacters} from "./service/service";
function App() {
  useEffect(()=>{
    const fetchChracterData = async () => {
      const response = await getCharacters();
      console.log('ocv response -> ', response);
    }
    fetchChracterData();
  },[]);
  return (
    <div>
      simple App
    </div>
  );
}

export default App;
