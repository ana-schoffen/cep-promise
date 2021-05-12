import React from "react";
import { MuiThemeProvider} from "@material-ui/core/styles";
import {
  FormControl,
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

function inicio(props)
{
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
                value={props.cepEntrada}
                onChange={(ev) => props.setCepEntrada(ev.target.value)}
              />
              </Grid>
              <Grid item xs={12}>
                {props.carregando && <CircularProgress />}
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={props.handleSubmit}
                      disabled={props.carregando}
                    >
                      Buscar
                    </Button>
                </FormControl>
              </Grid>
    </Grid>
  </MuiThemeProvider>
  }

export default inicio;