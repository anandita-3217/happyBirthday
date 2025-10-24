import React, { useState } from "react";
import cake from './assets/cake.gif';
import Confetti from "./assets/Confetti.js";
const wishes = ["HBD loser!","Hope you get everytthing you want!","U the best!","I💖U","You're half way to 50!","Hope your day is amazing!"];
function BirthdayWishes(){
    // UseStates
    const [wish,setWish] = useState(''); 
    const [celebrate,setCelebrate] = useState(false);
    const [showConfetti,setShowConfetti] = useState(false);
    const [spinCake, setSpinCake] = useState(false);

    // Age related stuff should later convert it to string and make the function convert everthing back this is too verbose
    const birthYear = 2000;
    const birthMonth = 10;
    const birthday = 24;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth()+1;
    const currentDay = new Date().getDate();
    const age =  currentYear - birthYear;

    const isBirthday = currentMonth == birthMonth && currentDay == birthday;

    const handleWish = () => {
        const randomWish = wishes[Math.floor(Math.random()*wishes.length)];
        setWish(randomWish);
        setCelebrate(true);
    }
    return (
        <div>
           { showConfetti &&<Confetti />}
            <div className="App-container">
                {isBirthday ? `🎉Happy ${age}th Birthday Ananya!🎉`:`🌟Have a great day!🌟`}
                <img src={cake} alt="cake" className="App-cake" style={{animation: spinCake?'App-logo-spin 2s linear infinite':'none'}}/>
                <button className="btn" onClick={handleWish} >Make a Wish</button>
                <button className="btn" onClick={()=>setShowConfetti(!showConfetti)} >Ready for a surprise!</button>
                <button className="btn" onClick={()=>setSpinCake(!spinCake)} >Click me I dare you!</button>
                {celebrate && (
                <div className="wishes">
                <p>💫{wish}💫</p>
                </div>)}
            </div>
        </div>
    )
}
export default BirthdayWishes;