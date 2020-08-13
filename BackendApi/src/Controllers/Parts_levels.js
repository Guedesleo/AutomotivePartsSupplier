const connection = require('../database/connection'); 

module.exports = {
    async index(request, response) {
        const Parts_levels = await connection('Parts_levels').select('*');
        return response.status(200).json(Parts_levels);
    },

    async show(request ,response){
        const {id} = request.params;

        const Parts_levels = await connection('Parts_levels').where('id',id).first();
        if(!Parts_levels)
            return response.status(400).json({message : "Este nivel do carro não existe."});
           
        return response.status(200).json(Parts_levels);

    },

    async post (request , response){
        const { Description_Levels} = request.body;
        try {      
            await connection('Parts_levels').insert({Description_Levels}); 
            return response.status(200).json({message : "Cadastrado com sucesso do Niveis"});

        }catch(error){
            if(error.errno === 19){
                response.status(400).send({error :[`O Nivel da descrição ${Description_Levels} ja tem cadastro na nossa base de dados.`]})
            }
        }
    },

    async update (request , response){
        const {Description_Levels}= request.body;
        const {id} = request.params;
        try {
            const parts_levels = await connection('Parts_levels').select('*').where({id});
            if (parts_levels.length === 0)
               throw new Error(`A descrição com id: "${id}" não tem cadastro na nossa base dados.`);  

            await connection('Parts_levels').where({id}).update({Description_Levels});
            return response.status(200).json({message : "Atualizado com Sucesso niveis existentes no carro!!"}); 
        } catch (error) {
            if(error.errno === 19){
                response.status(400).send({"error" :[`A descrição com nome: "${Description_Levels}" já existe no nossos registros. `]})
            }
            response.status(400).send(error.message)
        }
    },

    async delete(request , response){
        const {id} = request.params;
        try {
            const parts_levels = await connection('Parts_levels').select('*').where({id});
            if (parts_levels.length === 0)
               throw new Error(`A descrição dos niveis  com id: "${id}" não existe em nossos registros.`);  
               //Aqui vem a Dependecia
               await connection('Parts_manufacture').where({id}).delete();
               return response.status(200).json({message : `O fabricante deletado com sucesso!!`}); 
        } catch (error) {
            response.status(400).send(error.message)
        }
    }
}