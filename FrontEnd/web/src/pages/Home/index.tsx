import React from 'react';
import'./styles.css';

const Home =() =>{
    
    return(
        <div id="pageHome">
            <div className="content">
                <header>
                    <div className="links">
                        <a >Fabricante</a>
                        <a>Carros</a>
                    </div>
                </header>
                <main>  
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
                                <tr>
                                    <td><span></span></td>
                                    <td>Volvo</td>
                                </tr>

                                {/* <tr>
                                    <td><span style='background-image: url(https://image.shutterstock.com/image-photo/frankfurt-sept-24-chevrolet-company-600w-85296106.jpg);'></span></td>
                                    <td>Chevrolet</td>
                                </tr>

                                <tr>
                                    <td><span style='background-image: url(https://image.shutterstock.com/image-photo/kiev-ukraine-march-21-2015-600w-267660191.jpg);'></span></td>
                                    <td>Ford</td>
                                </tr> */}
                            </tbody>
                        </table>     
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home;