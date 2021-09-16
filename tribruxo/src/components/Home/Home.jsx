import { useState } from "react";
import Students from "../Students/";
import "./styles.css";

const Home = ({ characters }) => {
  const [triBruxos, setTriBruxos] = useState([]);

  function handleClick() {
    setTriBruxos([]);
    const random = [];
    const house = [];
    const random1 = Math.floor(Math.random() * (11 - 0) + 0);
    const random2 = Math.floor(Math.random() * (11 - 0) + 0);
    const random3 = Math.floor(Math.random() * (11 - 0) + 0);

    random.push(random1);
    const selected1 = characters[random1];
    house.push(selected1.house);

    if (
      !random.includes(random2) &&
      !house.includes(characters[random2].house)
    ) {
      random.push(random2);
      const selected2 = characters[random2];
      house.push(selected2.house);
      if (
        !random.includes(random3) &&
        !house.includes(characters[random3].house)
      ) {
        const selected3 = characters[random3];
        setTriBruxos([selected1, selected2, selected3]);
      }
    } else console.log("tryagain");
  }

  return (
    <>
      <h1>Torneio TriBrucho</h1>
      <div className="container">
        <h3>Clique no botão para encontrar os feiticeiros!</h3>

   
        <button className="Start" onClick={handleClick}>
          Começar
          </button>
        <div className="render">
          <Students characters={triBruxos}></Students>
        </div>
       
<h6>Obs: Se não encontrar os bruxos é por quê nenhum foi merecedor! Tente novamente!</h6>
      </div>
    </>
  );
};

export default Home;
