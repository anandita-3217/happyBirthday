import React, { useState } from "react";
import cake from './assets/cake.gif';
import Confetti from "./assets/Confetti.js";
const wishes = ["HBD loser!","Hope you get everytthing you want!","U the best!","I💖U","Youre half way to 50!","Hope your day is amazing!"];
function BirthdayWishes(){
    const [wish,setWish] = useState(''); 
    const [celebrate,setCelebrate] = useState(false);
    const handleWish = () => {
        const randomWish = wishes[Math.floor(Math.random()*wishes.length)];
        setWish(randomWish);
        setCelebrate(true);
    }
    const age =  Math.abs (2000 - new Date().getFullYear());
    return (
        <div>
            <Confetti />
            <header className="App-header">Happy {age}th Birthday Ananya!
                <img src={cake} alt="cake"/>
                <button className="btn" onClick={handleWish} >Make a Wish</button>
                <p>💫{wish}💫</p>
            </header>
        </div>
    )
}
export default BirthdayWishes;