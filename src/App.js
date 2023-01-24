import './App.css';
import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";


function getRandonAnimal(){
    const animals = ['bird', 'cow', 'cat', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random()*animals.length)];
}
function App(){
    const [animals,setAnimals] = useState([]);

    const handleClick = () =>{
            setAnimals([...animals,getRandonAnimal()])
    }
    const renderedAnimals = animals.map((animal , index)=>{
        console.log('animal',animal);
        return <AnimalShow type={animal} key = {index}/>
    });
    return <div className='app'>
        <button onClick={handleClick}>Add Animals</button>
        <div className='animal-list'>{renderedAnimals}</div>
    </div>
}
export default App;