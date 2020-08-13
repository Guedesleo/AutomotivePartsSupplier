const connection = require('../database/connection');

module.exports  =   {

    async index(request, response) {
        
        const Cars = await connection('Cars').select('*');
        return response.status(200).json(Cars);
    },
    async show(request ,response){
        const {id} = request.params;

        const Cars = await connection('Cars').where('id',id).first();
        if(!Cars)
            return response.status(400).json({message : "Carro não existe."});
           
        return response.status(200).json(Cars);

    },
    async create(request, response) {
       const { id_Fabricante, NomeCarro, Ano,Modelo} = request.body;        
        const id = id_Fabricante;
       try {   
            const cars = await connection('Car_Manufactures').select('*').where({id});
            if(cars.length === 0)
                throw new Error(`O Fabricante ${id_Fabricante} não tem cadastro na nossa base de dados.`); 

            const  cars_count = await connection('cars').count('id',{as:"countId"}).where({NomeCarro}).and.where({Modelo});
            if(cars_count[0].countId === 1){
                throw new Error(`Já existe modelo de ${NomeCarro} "${Modelo}" na nossa base de registros .`);
            }

            await connection('Cars').insert({id_Fabricante, NomeCarro, Ano,Modelo}); 
             return response.status(200).json({message : "Cadastrado com sucesso as informações do carro"});

            }catch(error){
                if(error.errno === 19 )
                     response.status(400).send(error.message)

                    response.status(400).send(error.message);
                
                     response.status(400).send({error})
        }
    },

    async update(request, response) {
        const {id_Fabricante, NomeCarro, Ano,Modelo}= request.body;
        const {id} = request.params;    
        try {
            const cars_uri = await connection('cars').select('*').where({id});
            if (cars_uri.length === 0)
                 throw new Error("Fabricante do Carro Inválido");  
                 
            const Cars = await connection('cars').select('*').where({id_Fabricante});
            if (Cars.length === 0)
            throw new Error(`O Fabricante "${id_Fabricante}"não existe em nossos registros. `);  
            
            const  cars_count = await connection('cars').count('id',{as:"countId"}).where({NomeCarro}).and.where({Modelo});
            if(cars_count[0].countId === 1){
                throw new Error(`Já existe modelo de ${NomeCarro} "${Modelo}" na nossa base de registros .`);
            }
            
             await connection('Cars').update({id_Fabricante, NomeCarro, Ano,Modelo}).where({id});
            return response.status(200).json({message: "Atualizado com sucesso!!"});


        } catch (error) {
            if(error.errno === 19) 
                return response.status(400).send(error.message)

                return response.status(400).send(error.message)
        }
    },

    async delete(request, response) {
        const {id} = request.params;
         try {

                const cars = await connection('cars').select('*').where({id});

                 if (cars.length === 0)
                     throw new Error(`O Fabricante "${id}"não foi encontrado no nossos registros. `);  
                    
                id_Fabricante=id;    
                const  cars_count = await connection('cars').count('id',{as:"countId"}).where({id_Fabricante});
                if(cars_count[0].countId === 0){
                         await connection('Cars').where({id}).delete();
                        return response.status(200).json({message : `Carro deletado com sucesso!!`}); 
                }else{           
                        const cars_uri = await connection('cars').select('*').where({id});
                        return response.status(404).json({message : `${cars_uri[0].NomeCarro} não pode ser excluido , pois existem informações relacionada a eles.`});
                     }
            
            } catch (error) {       
                        return response.status(400).send(error.message)
            }
    },

}