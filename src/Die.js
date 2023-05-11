import React from "react"

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "FFFFFF"
    }
    return (
        <div 
        style={styles} 
        className="die-face"
        onClick={props.rollSelectedDice}
        >
            <h2   className="die-num">{props.value}</h2>
        </div>
    )
}