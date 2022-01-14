import { useEffect, useState } from "react";

function Avatar() {
  const [avatar, setAvatar] = useState({ sprites: {} });
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/39/`);
      const data = await response.json();
      //   console.log(data);
      setAvatar(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "50px",
          height: "50px",
          float: "left",
          margin: "auto",
          padding: 0,
          backgroundColor: "white",
          borderRadius: "50%",
          borderColor: "black",
          borderStyle: "solid",
        }}
      >
        <img src={avatar.sprites.front_default} alt="Jigglypuff pokemon" />
      </div>
      {/* <div
        style={{float: "left",}}
      >
        <h4
          style={{margin: "0",}}
        >
          {avatar.name}
        </h4>
      </div> */}
    </div>
  );
}

export default Avatar;
