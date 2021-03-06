import React, { useEffect, useState } from "react";
import cep from "cep-promise";
import api from "../api";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  FormControl,
  Button,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

function Inicio(props) {
  const [cepEntrada, setCepEntrada] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async () => {
    try {
      props.setStatus("consulta");

      setLoading(true);
      const response = await api.searchCep(cepEntrada);

      props.setDados({
        cep: response.cep,
        rua: response.rua,
        cidade: response.cidade,
        estado: response.estado
      });

      props.setStatus("resultado");
    } catch (error) {
      console.log(error);
      props.setStatus("erro");
    } finally {
      setLoading(false);
    }
  };
  return <MuiThemeProvider theme={props.theme}>
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
        {loading && <CircularProgress />}
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Buscar
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  </MuiThemeProvider>
}

export default Inicio;