const connection = require('../database/connection');

module.exports  =   {

    async index(request, response) {
        const Car_Manufactures = await connection('Car_Manufactures').select('*');
        return response.status(200).json(Car_Manufactures);
    },

    async post(request, response) {

         let { name,fabricante_url} = request.body;
        try {   
             const CreatePost = await connection('Car_Manufactures').insert({name,fabricante_url});
            return response.status(200).json(CreatePost);
        }catch(error){
            if(error.errno === 19){
                response.status(400).send({error :[`O Fabricante "${name}" já existe no nossos registros`]})
            }
        }
      
    },

    async update(request, response) {
        const {name}= request.body;
        const {id} = request.params;
        try {
            const car_manufacuture = await connection('Car_Manufactures').select('*').where({id});
            if (car_manufacuture.length === 0)
                 throw new Error("Fabricante do Carro Inválido");        
            
            car_manufacuture.name = name;
            
            const putCars_manufacture = await connection('Car_Manufactures').where({id}).update({name});

            return response.status(2000,).json(putCars_manufacture);
        }catch(error){
            
            if(error.errno === 19){
                response.status(400).send({"error" :[`O Fabricante "${name}" já existe no nossos registros. `]})

            }
                response.status(400).send({"error" :[`O Fabricante "${id}"não existe em nossos registros. `]})
        }
        
       
    },

    async delete(request, response) {
        const {id} = request.params;
        try {
            const car_manufacuture = await connection('Car_Manufactures').select('*').where({id});

            if (car_manufacuture.length === 0)
                 throw new Error({message : "Fabricante não encontrado"});   

            name = car_manufacuture[0].name;

            const totalDependencia =  await connection('Car_Manufactures').count('NomeCarro',{as:"CountCarro"}).innerJoin('Cars','Cars.id_Fabricante','=','Car_Manufactures.id').where({name})
            
            if(totalDependencia[0].CountCarro === 0)
            {   
                await connection('Car_Manufactures').where({id}).delete();
                return response.status(200).json({message : `${car_manufacuture[0].name} deletado com sucesso!!`}); 
            }else{
                response.json({message : `${car_manufacuture[0].name} Não pode ser excluido , pois existem informações relacionada a eles.`});
            }
    
        }catch(error){
            response.status(404).send({error :[`O Fabricante "${id}"não existe em nossos registros`]});
        }    
    },
}   