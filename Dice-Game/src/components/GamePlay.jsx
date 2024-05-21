import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button, OutLineButton } from "../styled/Button";

const GamePlay = () => {
    const [selectedNumber,setSelectedNumber]= useState(0);
    const [score,setScore] = useState(0);
    const [ currentDice, setcurrentDice ] = useState(1);
    const [error,setError] =useState();

    
    const generateRandomNumber = (min,max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    const roleDice = () => {
        if(!selectedNumber) {
            setError("You have not selected any number")
            return
        }
        setError("")
        const randomNumber = generateRandomNumber(1,7)
        setcurrentDice((prev) => randomNumber)


        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber)
        }else{
            setScore((prev) => prev-2)
        }

        setSelectedNumber(undefined)
    }


  return (
    <MainContainer>
        <div className="top_section">
      <TotalScore score={score}/>
      <NumberSelector 
      error={error}
      setError={setError}
      selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/> 
      <div className="btns">
        <OutLineButton>Reset</OutLineButton>
        <Button>Show Rules</Button>
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer =styled.main`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`