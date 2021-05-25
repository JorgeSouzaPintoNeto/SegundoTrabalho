import { Paper, Typography,  Button, CssBaseline, TextField, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import "./estilo.css";


const useStyles = makeStyles((theme) => ({
    image: {
      backgroundImage: localStorage.getItem("background"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      marginTop: '12%',
      marginLeft: 50,
      marginRight: 50,
      display: 'flex',
      height: '100px',
      flexDirection: 'column',
      alignItems: 'center',

    },
    
        
    form: {
      marginTop: 10,
      width: '100%',
    },
    submit: {
      width: '99%',
      marginTop: 10,
      marginRight: 50,

    },
    submit2: {
      width: '99%',
      marginTop: 10,
      marginRight: 50,
      marginBottom: 40,

    },
  }));

 const Form = ({ atual }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" style={{ height: '100vh', overflow: 'hidden' }} >
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} className={classes.image} />
      <Grid item xs={12} sm={12} md={12} component={Paper} className="caixa" elevation={6} square>
        <div className="paper">
          <Typography component="h1" variant="h5" color="primary">
            Fazer o login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario"
              name="usuario"
              autoComplete="user"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
            />
            <Grid container>
              <Grid item xs>
                <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Entrar
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit2}
                onClick={ atual }
                >
                Mudar tema
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Form