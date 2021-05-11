import React, { useState } from "react";
import {
  FormControl,
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import cep from "cep-promise";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  const [cepEntrada, setCepEntrada] = useState();
  const [carregando, setCarregando] = useState(false);
  const [final, setFinal] = useState(false);
  const [inicio, setInicio] = useState(true);
  const handleSubmit = async () => {
    try {
      setCarregando(true);

      const resposta = await cep(cepEntrada);

      const cepsDados = dados;

      cepsDados.push({
        cep: resposta.cep,
        rua: resposta.street,
        cidade: resposta.city,
        estado: resposta.state,
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

  if (final)
    if (!inicio)
      return (
        <div className="App">
          <div className="App-header">
            <MuiThemeProvider theme={theme}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4">
                    Ocorreu um erro na busca
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBack}
                    disabled={carregando}
                  >
                    Tentar novamente
                  </Button>
                </Grid>
              </Grid>
            </MuiThemeProvider>
          </div>
        </div>
      );
    else
      return (
        <div className="App">
          <div className="App-header">
            <MuiThemeProvider theme={theme}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4">
                    CEP {dados[dados.length - 1].cep}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    {dados[dados.length - 1].rua}
                  </Typography>
                  <Typography variant="subtitle1">
                    {dados[dados.length - 1].cidade},{" "}
                    {dados[dados.length - 1].estado}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBack}
                    disabled={carregando}
                  >
                    Fazer outra Busca
                  </Button>
                </Grid>
              </Grid>
            </MuiThemeProvider>
          </div>
        </div>
      );
  else
    return (
      <div className="App">
        <div className="App-header">
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h4">
                  Qual CEP você deseja consultar?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="CEP"
                  value={cepEntrada}
                  onChange={(ev) => setCepEntrada(ev.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={carregando}
                  >
                    Buscar
                  </Button>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                {carregando && <CircularProgress />}
              </Grid>
            </Grid>
          </MuiThemeProvider>
        </div>
      </div>
    );
}

export default App;
