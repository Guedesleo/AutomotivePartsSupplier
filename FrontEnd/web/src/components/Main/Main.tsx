import React from 'react'
import {Container} from './styles';
// import Home from './pages/home/home'
import ListagemCarManufacture from './pages/Listagem-CarManufacture/listagemCarManufacture'
const Main: React.FC =() => {
    return (
        <Container>
            <ListagemCarManufacture/>
        </Container>
    );
}
 export default Main