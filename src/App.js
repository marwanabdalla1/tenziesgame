import './App.css';
import Die from './Die';
import { useState } from 'react';
import React from 'react';
import {nanoid} from "nanoid"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }
    

    //maybe i can modify this function so that it first maps the dice array
    // then checks if the dice is held if so, ignores
    //if yes then it changes its value
    //if so then it doesn;t
    function rollDice() {
        setDice(prevDices=>{
          return prevDices.map(die=>{
              return die.isHeld?  die : {...die, value: Math.ceil(Math.random() * 6)}
            })
          
        })
    }


    //I will make a function so that it takes the id of the pressed button and flips it

    function rollSelectedDice(id){
      console.log("recieved")
      setDice(prevDices=>{
        return prevDices.map(die=>{
            return die.id===id? {...die, isHeld:!die.isHeld} :die
          })
        
      })
      console.log(dice)
    }
    
    const diceElements = dice.map(die => (
        <Die key={die.id}
         value={die.value} 
         rollSelectedDice={()=>rollSelectedDice(die.id)} 
         isHeld={die.isHeld}/>
    ))
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}

