import Part from '../DAO/parts';
import { Request , Response} from 'express';

module.exports  =   {

    index(request:Request, response:Response) {   
        Part.all().then((res) => {return response.status(200).json(res)});
    },

    show(request:Request, response:Response){
        Part.find(request.params.id).then((res) => {return response.status(200).json(res)});
     },

    // async post(request:Request, response:Response){
    //     const {Part_name} = request.body;
    //     try {
    //         const  Parts_count = await connection('Parts').count('id',{as:"countId"}).where({Part_name});
    //         if(Parts_count[0].countId === 1){
    //             throw new Error(`Já existe nome dessa peça "${Part_name}"  na nossa base de registros .`);
    //         }
    //             Part.post(request.body ,function(part){
    //                 return response.status(200).json({message : "Cadastrado com sucesso de Pecas"});
    //                 });         
    //     } catch (error) {
    //         response.status(400).send(error.message)
    //     } 
    // },

}