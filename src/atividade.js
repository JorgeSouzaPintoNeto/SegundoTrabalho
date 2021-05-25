import { useState } from 'react'
import Form from './form'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { temaEscuro, temaClaro} from './tema'
import pet1 from "./image/pet1.jpg";
import pet2 from "./image/pet2.jpg";


const Atividade = () => {

    const [ atual, setTema ] = useState( temaClaro )
    const [ claro, setClaro ] = useState( true )

    const mudarTema = () => {
        if (claro) 
        {
            setTema( temaEscuro ) 
            localStorage.setItem("background",'url('+ pet2+')')
        }
        else
        {
            setTema( temaClaro ) 
            localStorage.setItem("background",'url('+ pet1+')') 
        }
            

        setClaro( !claro )
    }
  
    return (
        <ThemeProvider theme={ atual }>
            <CssBaseline />
            <Form atual={ mudarTema }/>            
        </ThemeProvider>
    )
}

export default Atividade