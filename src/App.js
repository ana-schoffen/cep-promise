import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import cep from "cep-promise";
import Buscado from "./containers/buscado";
import TelaErro from "./containers/Tela_erro";
import Inicio from "./containers/inicio";

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
  const [dados, setDados] = useState([]);
  const [cepEntrada, setCepEntrada] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [final, setFinal] = useState(false);
  const [inicio, setInicio] = useState(true);
  const handleSubmit = async () => {
    try {
      setCarregando(true);

      const response = await cep(cepEntrada);
      setCepEntrada("");
      const cepsDados = dados;

      cepsDados.push({
        cep: response.cep,
        rua: response.street,
        cidade: response.city,
        estado: response.state,
      });

      setFinal(true);

      setDados(cepsDados);
    } catch (error) {
      setFinal(true);
      setInicio(false);
    } finally {
      setCarregando(false);
    }
  };

  const handleBack = async () => {
    setFinal(false);
    setInicio(true);
  };

      return (
        <div className="App">
          <div className="App-header">
           {(final && !inicio)?
              <TelaErro theme={theme} handleBack={handleBack} carregando={carregando}/>
              :(final)? 
              <Buscado theme={theme} dados={dados} carregando={carregando} handleBack={handleBack}/>
              : 
              <Inicio theme={theme} handleSubmit={handleSubmit} carregando={carregando} cepEntrada={cepEntrada} setCepEntrada={setCepEntrada}/>
           }
          </div>
        </div>
      );
}
export default App;
