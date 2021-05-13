import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Typography
} from "@material-ui/core";

function Buscado(props) {
  function handleBack() {
    props.setStatus("consulta");
  }

  return <MuiThemeProvider theme={props.theme}>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4">
          CEP {props.dados.cep}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          {props.dados.rua}
        </Typography>
        <Typography variant="subtitle1">
          {props.dados.cidade},{" "}
          {props.dados.estado}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}

        >
          Fazer outra Busca
        </Button>
      </Grid>
    </Grid>
  </MuiThemeProvider>
}

export default Buscado;