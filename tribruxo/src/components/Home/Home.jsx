import { useState } from "react";
import Students from "../Students/";
import "./styles.css";

const Home = ({ characters }) => {
  const [triBruxos, setTriBruxos] = useState([]);

  function handleClick() {
    setTriBruxos([]);

    const random1 = Math.floor(Math.random() * (11 - 0) + 0);
    const random2 = Math.floor(Math.random() * (11 - 0) + 0);
    const random3 = Math.floor(Math.random() * (11 - 0) + 0);

    const selected1 = characters[random1];
    const selected2 = characters[random2];
    const selected3 = characters[random3];
    setTriBruxos([...triBruxos, selected1, selected2, selected3]);
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
      </div>
    </>
  );
};

export default Home;
