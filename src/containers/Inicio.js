import React, { useState } from "react";
import cep from "cep-promise";
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
      const response = await cep(cepEntrada);
      setCepEntrada("");

      props.setDados({
        cep: response.cep,
        rua: response.street,
        cidade: response.city,
        estado: response.state,
      });
      props.setStatus("resultado");
    } catch (error) {
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