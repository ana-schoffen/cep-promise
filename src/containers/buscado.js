import { MuiThemeProvider} from "@material-ui/core/styles";
import React from "react";
import {
  Button,
  Grid,
  Typography,
} from "@material-ui/core";

function buscado(props)
{
  return <MuiThemeProvider theme={props.theme}>
    <Grid container spacing={4}>
    <Grid item xs={12}>
      <Typography variant="h4">
        CEP {props.dados[props.dados.length - 1].cep}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="subtitle1">
        {props.dados[props.dados.length - 1].rua}
      </Typography>
      <Typography variant="subtitle1">
        {props.dados[props.dados.length - 1].cidade},{" "}
        {props.dados[props.dados.length - 1].estado}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Button
        variant="contained"
        color="primary"
        onClick={props.handleBack}
        disabled={props.carregando}
      >
        Fazer outra Busca
      </Button>
    </Grid>
    </Grid>
</MuiThemeProvider>
}

export default buscado;