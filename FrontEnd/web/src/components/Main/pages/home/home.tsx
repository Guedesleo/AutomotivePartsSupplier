import React, { useState,FormEvent,ChangeEvent} from 'react'
import Dropzone from '../componentes/dropzone'
import api from '../../../../services/api';

import'./styles.css'


const Main: React.FC =() => {
   const [seletedFile , setSelectedFile]= useState<File>();
   const[formData, setFormData] = useState({
    name_fabricante:'',
})

function handleInputChance(event: ChangeEvent<HTMLInputElement>){
    const {name,value}=event.target;
    setFormData({...formData,[name]:value})
}
   async function handleSubmit(event : FormEvent){
    event.preventDefault();

    const {name_fabricante}=formData;
    const data = new FormData();
         data.append('name_fabricante',name_fabricante);
     if(seletedFile) {
         data.append('fabricante_url',seletedFile);
     }
       await api.post('carAuto',data);
       alert("Fabricante Cadastrado!")    
}
    return (
       <div id="page-home">
           <div className="container">
           <form onSubmit={handleSubmit}>
               <h1>Resgister Manufacture</h1>
                <Dropzone onFileUploaded= {setSelectedFile}/>
                 <fieldset>
                         <div className="field">
                             <label htmlFor="name_fabricante">Nome da Fabricante do Carro</label>
                             <input 
                             type="text"
                             name="name_fabricante"
                             id="name_fabricantee"
                             onChange ={handleInputChance} 
                             />
                         </div>
                  </fieldset>

                  <button type="submit">Cadastar Fabricante</button>
            </form>
           </div>
       </div>
    );
}

export default Main