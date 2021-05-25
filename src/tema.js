
import { createMuiTheme } from '@material-ui/core/styles';

const temaEscuro = createMuiTheme(({
    palette: {
        type: 'dark',
        primary: {
          main: '#E32222',
        },
          background: {
          default: '#333',
          paper: 'rgb(0 0 0 / 84%)',
        },
      },
}))

const temaClaro = createMuiTheme(({
    palette: {
        type: 'light',
        primary: {
          main: '#20339E',
        },
        
        background: {          
          default: '#ccc',
          paper: 'rgb(255 255 255 / 84%)',    
        },
        

      },    

}))



export { temaEscuro, temaClaro }