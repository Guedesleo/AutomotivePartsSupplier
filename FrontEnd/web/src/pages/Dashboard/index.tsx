import React from 'react';
import'./styles.css';
import {FcList} from 'react-icons/fc';
import Nav from 'react-bootstrap/Nav'

const Dashboard =() =>{
    
    return(
            <div id="page-home">
                        <input id= "check"type="checkbox" defaultChecked />
                        <label id="icone" htmlFor="check"><FcList style={{fontSize:50}}/></label>

                <div className="content">
                        <div className="nav-menu">
                            <Nav defaultActiveKey="/home" className="flex-column">
                              
                                    <Nav.Link href="#"><div className="link">Home</div></Nav.Link>
                                    <Nav.Link eventKey="#"><div className="link">Cadastro de Fabricnate</div></Nav.Link>
                            </Nav>
                        </div>
                </div>
            </div>
        );
    }
    
    export default Dashboard;