import connection from '../database/connection';
import { Request , Response} from 'express';

export default {

    async index(request :Request, response :Response) {
        const Car_Manufactures = await connection('Car_Manufactures').select('*');
        return response.status(200).json(Car_Manufactures);
    },

    async show(request :Request,response:Response){
        const {id} = request.params;

        const Car_Manufactures = await connection('Car_Manufactures').where('id',id).first();
        if(!Car_Manufactures)
            return response.status(400).json({message : "Fabricante não existe."});
        
            const serializedPoint = {
                ...Car_Manufactures,
                fabricante_url:`http://192.168.56.1:3333/uploads/${Car_Manufactures.fabricante_url}` ,
            };
        return response.status(200).json({Car_Manufactures:serializedPoint});

    },
    async post(request :Request, response:Response) {
        const { name_fabricante,fabricante_url} = request.body;
        const teste = {
            name_fabricante,
            fabricante_url: request.file.filename
        }
        try {   
             const CreatePost = await connection('Car_Manufactures').insert(teste);
            return response.status(200).json(CreatePost);
        }catch(error){
            if(error.errno === 19){
                response.status(400).send({error :[`O Fabricante "${name_fabricante}" já existe no nossos registros`]})
            }
        }
      
    },

    async update(request:Request, response:Response) {
        const {name_fabricante}= request.body;
        const {id} = request.params;
        try {
            const car_manufacuture = await connection('Car_Manufactures').select('*').where({id});
            if (car_manufacuture.length === 0)
                 throw new Error("Fabricante do Carro Inválido");        
            
            await connection('Car_Manufactures').where({id}).update({name_fabricante});

            return response.status(200).json({message : "Atualizado com Sucesso!!"});
        }catch(error){
            
            if(error.errno === 19){
                response.status(400).send({"error" :[`O Fabricante "${name}" já existe no nossos registros. `]})

            }
                response.status(400).send({"error" :[`O Fabricante "${id}"não existe em nossos registros. `]})
        }
        
    },

    async delete(request:Request, response:Response) {
        const {id} = request.params;
        try {
            const car_manufacuture = await connection('Car_Manufactures').select('*').where({id});
            if (car_manufacuture.length === 0)
                 throw new Error("Fabricante não encontrado");   

            let name_fabricante = car_manufacuture[0].name_fabricante;
            const totalDependencia =  await connection('Car_Manufactures').count('NomeCarro',{as:"CountCarro"}).innerJoin('Cars','Cars.id_Fabricante','=','Car_Manufactures.id').where({name_fabricante})
            if(totalDependencia[0].CountCarro === 0)
            {   
                await connection('Car_Manufactures').where({id}).delete();
                return response.status(200).json({message : `${car_manufacuture[0].name_fabricante} deletado com sucesso!!`}); 
            }else{
                 return response.json({message : `${car_manufacuture[0].name_fabricante} Não pode ser excluido , pois existem informações relacionada a eles.`});
            }
    
        }catch(error){
            return response.status(404).send({error :[`O Fabricante "${id}"não existe em nossos registros`]});
        }    
    },
}   