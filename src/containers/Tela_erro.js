import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
function Tela_erro(props)
{
  return <MuiThemeProvider theme={props.theme}>
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
                onClick={props.handleBack}
                disabled={props.carregando}
              >
                Tentar novamente
          </Button>
        </Grid>
    </Grid>
  </MuiThemeProvider>
}

export default Tela_erro;