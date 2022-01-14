import React, { useState, useEffect } from "react";
import { data } from "./data.js";
import "./LandingPage.css";

export function LandingPage() {
  const [count, setCount] = useState(0);
  const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${data[count].count}.png`;
  const name = `${data[count].name}`;
  const hStyle = { color: `#${data[count].color}` };

  useEffect(() => {
    const inter = setInterval(() => {
      if (count === 8) {
        setCount(0);
        console.log(8);
      } else {
        setCount(count + 1);
      }
    }, 5000);
    return () => {
      clearInterval(inter);
    };
  }, [count]);

  return (
    <div id="main">
      <div id="right">
        <h1>
          <span id="My">My</span>
          <span id="Pokemon">Pokemon</span>
        </h1>
        <p id="para">
          MyPokemon is the number one social media site for Pokemon fans.
        </p>
        <button id="button" to="/posts">
          Explore Site
        </button>
      </div>
      <div id="left">
        <img id="pokeImg" src={url} />
        <h2 id="name" style={hStyle}>
          {name}
        </h2>
      </div>
    </div>
  );
}
/**while (true){
        if(count === 8){
            setTimeout(()=>count=0,5000)
        }else{
            setTimeout(()=>count+=1,5000)
        }
    }*/
