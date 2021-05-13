import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Typography
} from "@material-ui/core";
function Erro(props) {
  function handleBack() {
    props.setStatus("consulta");
  }
  return <MuiThemeProvider theme={props.theme}>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4">
          Ocorreu um erro na busca: CEP inválido
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
        >
          Tentar novamente
        </Button>
      </Grid>
    </Grid>
  </MuiThemeProvider>
}

export default Erro;