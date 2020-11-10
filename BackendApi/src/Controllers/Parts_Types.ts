import connection from '../database/connection';
import { Request , Response} from 'express';

module.exports = {
    async index(request:Request, response:Response) {
        const Parts_Types = await connection('Parts_Types').select('*');
        return response.status(200).json(Parts_Types);
    },

    async show(request:Request, response:Response){
        const {id} = request.params;

        const Parts_Types = await connection('Parts_Types').where('id',id).first();
        if(!Parts_Types)
            return response.status(400).json({message : "Esse tipo de peca carro não existe."});
           
        return response.status(200).json(Parts_Types);

    },

    async post (request:Request, response:Response){
        const { Description_Types} = request.body;
        try {      
            await connection('Parts_Types').insert({Description_Types}); 
            return response.status(200).json({message : "Cadastrado com sucesso de Tipoes de Peçaas"});

        }catch(error){
            if(error.errno === 19){
                response.status(400).send({error :[`Esse tipo de peça "${Description_Types}" ja tem cadastro na nossa base de dados.`]})
            }
        }
    },

    async update (request:Request, response:Response){
        const {Description_Types}= request.body;
        const {id} = request.params;
        try {
            const parts_types = await connection('Parts_Types').select('*').where({id});
            if (parts_types.length === 0)
               throw new Error(`Esse id: "${id}" não tem cadastro na nossa base dados.`);  

            await connection('Parts_Types').where({id}).update({Description_Types});
            return response.status(200).json({message : "Atualizado com Sucesso o Tipo de Peça!!"}); 
        } catch (error) {
            if(error.errno === 19){
                response.status(400).send({"error" :[`Esse tipo de Peça  nome: "${Description_Types}" já existe no nossos registros. `]})
            }
            response.status(400).send(error.message)
        }
    },

    async delete(request:Request, response:Response){
        const {id} = request.params;
        try {
            const parts_types = await connection('Parts_Types').select('*').where({id});
            if (parts_types.length === 0)
               throw new Error(`A peca  com id: "${id}" não existe em nossos registros.`);  
               //Aqui vem a Dependecia
               await connection('Parts_Types').where({id}).delete();
               return response.status(200).json({message : `Peça deletada com sucesso!!`}); 
        } catch (error) {
            response.status(400).send(error.message)
        }
    }
}