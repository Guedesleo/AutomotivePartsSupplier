import connection from '../database/connection';
import { Request , Response} from 'express';

module.exports  =   {

    async index(request:Request, response:Response) {
        
        const Suppliers = await connection('Suppliers').select('*');
        return response.status(200).json(Suppliers);
    },
    async show(request:Request, response:Response){
        const {id} = request.params;

        const Suppliers = await connection('Suppliers').where('id',id).first();
        if(!Suppliers)
            return response.status(400).json({message : "Carro não existe."});
           
        return response.status(200).json(Suppliers);

    },
    async post(request:Request, response:Response) {
       const { Suppliers_details} = request.body;        
        try {      
            await connection('Suppliers').insert({Suppliers_details}); 
            return response.status(200).json({message : "Cadastrado com sucesso os Forncedores"});

        }catch(error){
            if(error.errno === 19){
                response.status(400).send({error :[`Esse fornecedor "${Suppliers_details}" ja tem cadastro na nossa base de dados.`]})
            }
        }
    },

    async update(request:Request, response:Response) {
        const {Suppliers_details}= request.body;
        const {id} = request.params;
        try {
            const Suppliers = await connection('Suppliers').select('*').where({id});
            if (Suppliers.length === 0)
               throw new Error(`Esse id: "${id}" não tem cadastro na nossa base dados.`);  

            await connection('Suppliers').where({id}).update({Suppliers_details});
            return response.status(200).json({message : "Atualizado com Sucesso o forncedor!!"}); 
        } catch (error) {
            if(error.errno === 19){
                response.status(400).send({"error" :[`Esse forncedor "${Suppliers_details}" já existe no nossos registros. `]})
            }
            response.status(400).send(error.message)
        }
    },

    async delete(request:Request, response:Response) {
        const {id} = request.params;
        try {
            const Suppliers = await connection('Suppliers').select('*').where({id});
            if (Suppliers.length === 0)
               throw new Error(`O fornecedor com id: "${id}" não existe em nossos registros.`);  
               //Aqui vem a Dependecia
               await connection('Suppliers').where({id}).delete();
               return response.status(200).json({message : `Fornecedor deletado com sucesso!!`}); 
        } catch (error) {
            response.status(400).send(error.message)
        }
    },

}