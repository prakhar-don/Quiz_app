import React from "react";
import { useContext } from "react";
import { gameContext } from "../helpers/Contexts";
import { ques } from "./Questions";
 export const Endscreen=()=>{
    const {score,userName,setScore,setGame,setUserName}=useContext(gameContext);
    const restart=()=>{
        setScore(0);
        setGame("menu");
        setUserName(" ");
    }

   
    return(
        <div className="endscreen">
            <h2>Quiz has ended</h2>
            <h2>{userName} scored :</h2>
            <h3>{score}/{ques.length}</h3>

            <button onClick={restart}>Restart</button>

            
        </div>
    )
}