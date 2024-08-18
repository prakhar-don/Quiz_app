
import { useContext } from "react";
import { gameContext } from "../helpers/Contexts";
function Menu(){
    const {game,setGame,userName,setUserName}=useContext(gameContext);
    return(
        <div className="menu">
            <h2>  Enter your Name:</h2>
            <input type="text" placeholder="Name" onChange={(event)=>{
                setUserName(event.target.value);
            }} />
            <button onClick={()=>{
                setGame("playing");
            }} >Start Quiz</button>
        </div>
    );
}

export default Menu;