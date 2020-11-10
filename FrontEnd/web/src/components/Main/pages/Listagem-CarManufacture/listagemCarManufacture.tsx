import React from 'react';
// import api from '../../../../services/api';


import'./styles.css';

const ListagemCarManufacutre =() => {

    return (
        <div className="card table-container">
            <a href="/carAuto/create">Novo</a>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Logo do Fabricante</th>
                         <th>Name Fabricante</th>
                    </tr>
                </thead>    
                <tbody>
                </tbody>
            </table>
    </div>

    );
}


export default ListagemCarManufacutre