import {useState} from "react";
import Menu from "./components/Menu";
import './App.css';
import { gameContext } from "./helpers/Contexts";
import Quiz from "./components/Quiz";
import { Endscreen } from "./components/Endscreen";

function App() {

  const [game,setGame]=useState("menu");
  const [userName,setUserName]=useState(" ");
  let [score,setScore]=useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <gameContext.Provider value={{game,setGame,userName,setUserName,score,setScore}}>
      
      { game ===  "menu" && <Menu/>}
      {game === "playing" && <Quiz/>}
      {game === "finished" && <Endscreen/>}
      </gameContext.Provider>
      


      
     
    </div>
  );
}

export default App;
