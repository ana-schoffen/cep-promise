import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import Buscado from "./containers/Buscado";
import TelaErro from "./containers/Erro";
import Inicio from "./containers/Inicio";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#478BC9",
    },
    secondary: {
      main: "#80F1D3",
    },
  },
});

function App() {
  const [dados, setDados] = useState({});
  const [status, setStatus] = useState("consulta");




  return (
    <div className="App">
      <div className="App-header">
        {(status === "erro") ?
          <TelaErro theme={theme} status={status} setStatus={setStatus} /> : null}
        {(status === "resultado") ?
          <Buscado theme={theme} dados={dados} status={status} setStatus={setStatus} /> : null}
        {(status === "consulta") ?
          < Inicio theme={theme} status={status} setDados={setDados} dados={dados} setStatus={setStatus} /> : null}
      </div>
    </div>
  );
}
export default App;
