import {useState,useRef} from "react";
import { ques } from "./Questions";
import { useContext } from "react";
import { gameContext } from "../helpers/Contexts";

function Quiz(){
    const [currentQues,setQuesCount]= useState(0);
    const [optionChoosen,setOption]=useState("");

    const choice1=useRef(null);
    const choice2=useRef(null);
    const choice3=useRef(null);
    const choice4=useRef(null);

    const boxes=[choice1,choice2,choice3,choice4];

    let {score,setScore,game,setGame}=useContext(gameContext);

    
    const UserChoice=(e,option)=>{

        setOption(option);
        e.target.style.backgroundColor="yellow";
        


    }
    const CorrectAnswer=()=>{
        var req =ques[currentQues].answer;
        if(optionChoosen === ques[currentQues].answer){
            document.querySelector(`button[name=${req}]`).style.backgroundColor="green";
            setScore(score + 1);
            
        }
        else{
            document.querySelector(`button[name=${req}]`).style.backgroundColor="green";
           console.log(req);
        }
        setTimeout(()=>{
            setQuesCount(currentQues+1);
            boxes.map((val)=>{
                val.current.style.backgroundColor="white";
            })

        },"1000");
        
       /* boxes.map((val)=>{
            val.current.style.backgroundColor="white";
        }) */
    }

    const EndQuiz=()=>{
        var req =ques[currentQues].answer;
        if(optionChoosen === ques[currentQues].answer){
            document.querySelector(`button[name=${req}]`).style.backgroundColor="green";

            setScore(score + 1);
        }
        else{
            document.querySelector(`button[name=${req}]`).style.backgroundColor="green";
            console.log(req);
        }

        setTimeout(()=>{
        boxes.map((val)=>{
            val.current.style.backgroundColor="white";
        });


        setGame("finished");
        },"1000")
        
    }
    return(
        <div className="quiz">

            <h1>{ques[currentQues].prompt}</h1>
            <div className="questions">

            <button ref={choice1} value="button" name="optionA" onClick={(e)=>{ UserChoice(e,"optionA")}}>{ques[currentQues].optionA}</button>
            <button ref={choice2} value="button" name="optionB" onClick={(e)=>{UserChoice(e,"optionB")}}>{ques[currentQues].optionB}</button>
            <button ref={choice3} value="button" name="optionC" onClick={(e)=>{UserChoice(e,"optionC")}}>{ques[currentQues].optionC}</button>
            <button ref={choice4}value="button" name="optionD" onClick={(e)=>{UserChoice(e,"optionD")}}>{ques[currentQues].optionD}</button>
            </div>

           {currentQues === ques.length-1 ?(
            <button id="next" onClick={EndQuiz}>Finish Quiz</button>

           ):<button id="next"onClick={CorrectAnswer}>Next Question</button>
}
            

            


        </div>
    )
}

export default Quiz;