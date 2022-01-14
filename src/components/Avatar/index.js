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
    <>
      <div
        style={{
          display: "flex",
          width: "80px",
          height: "80px",
          float: "left",
          margin: "auto",
        }}
      >
        <img src={avatar.sprites.front_default} alt="Jigglypuff pokemon" />
      </div>
      <div style={{ float: "left" }}>
        <h3>{avatar.name}</h3>
      </div>
    </>
  );
}

export default Avatar;
