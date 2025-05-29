import { useState } from "react";

function CambiadorTema() {
  const [temaOscuro, setTemaOscuro] = useState(false);

  const cambiarTema = () => {
    setTemaOscuro(!temaOscuro);
    document.body.style.backgroundColor = !temaOscuro ? "#222" : "#fff";
    document.body.style.color = !temaOscuro ? "#fff" : "#000";
  };

  return (
    <div style={{ margin: "20px" }}>
      <button onClick={cambiarTema}>
        Cambiar a tema {temaOscuro ? "claro" : "oscuro"}
      </button>
    </div>
  );
}

export default CambiadorTema;
