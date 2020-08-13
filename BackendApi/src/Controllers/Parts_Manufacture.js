const connection = require('../database/connection'); 


module.exports ={
    async index(request, response) {
        const Parts_manufacture = await connection('Parts_manufacture').select('*');
        return response.status(200).json(Parts_manufacture);
    },

    async show(request ,response){
        const {id} = request.params;

        const Parts_manufacture = await connection('Parts_manufacture').where('id',id).first();
        if(!Parts_manufacture)
            return response.status(400).json({message : "Carro não existe."});
           
        return response.status(200).json(Parts_manufacture);

    },
    async post (request , response) {
        const { Nome_do_fabricante} = request.body;
        try {   

            await connection('Parts_manufacture').insert({Nome_do_fabricante}); 
            return response.status(200).json({message : "Cadastrado com sucesso do fabricante"});

        }catch(error){
            if(error.errno === 19){
                response.status(400).send({error :[`O Fabricante "${Nome_do_fabricante}" já existe no nossos registros`]})
            }
        }
    },
    
    async update (request,response){
        const {Nome_do_fabricante}= request.body;
        const {id} = request.params;
        try {
            const parts_manufacture = await connection('Parts_manufacture').select('*').where({id});
              if (parts_manufacture.length === 0)
                 throw new Error(`Fabricante ${id} não tem cadastro na nossa base dados.`);  
            
            await connection('Parts_manufacture').where({id}).update({Nome_do_fabricante});
            return response.status(200).json({message : "Atualizado com Sucesso o fabrincate!!"}); 
        } catch (error) {
            if(error.errno === 19){
                response.status(400).send({"error" :[`O Fabricante "${Nome_do_fabricante}" já existe no nossos registros. `]})
            }
            response.status(400).send(error.message)
        }
    },

    async delete (request , response){
        const {id} = request.params;
        try {
            const parts_manufacture = await connection('Parts_manufacture').select('*').where({id});
            if (parts_manufacture.length === 0)
               throw new Error(`O Fabricante "${id}" não existe em nossos registros`); 
               name = parts_manufacture[0].name; 
               //Aqui vem a Dependecia
               await connection('Parts_manufacture').where({id}).delete();
               return response.status(200).json({message : `O fabricante deletado com sucesso!!`}); 
        } catch (error) {
            response.status(400).send(error.message)
        }
    }

}