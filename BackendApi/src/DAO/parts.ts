import connection from '../database/connection';

export default {
    async all(){
        const Parts = await connection('Parts')
        .select(
            'Parts.Part_name',
            'Car_Manufactures.name_fabricante',
            'Cars.NomeCarro',
            'Cars.Ano',
            'Cars.Modelo',
            'Parts_manufacture.Nome_do_fabricante',
            'Parts_levels.Description_Levels'  ,
            'Parts_Types.Description_Types',
            'Suppliers.Suppliers_details',
            'Parts.id_Parts'
        )
         .innerJoin('Cars','Parts.id_Cars','=','Cars.id')
         .innerJoin('Parts_manufacture','Parts.id_Parts_manufacture','=','Parts_manufacture.id')
         .innerJoin('Parts_levels','Parts.id_Parts_levels','=','Parts_levels.id')
         .innerJoin('Parts_Types','Parts.id_Parts_Types','=','Parts_Types.id')
         .leftJoin('Suppliers','Parts.id_Suppliers','=','Suppliers.id')
         .innerJoin('Car_Manufactures','Cars.id_Fabricante','=','Car_Manufactures.id');
        return Parts
    },  

     async find(id:string){
         const part = await connection('Parts') .select(
             'Parts.Part_name',
             'Car_Manufactures.name_fabricante',
             'Cars.NomeCarro',
             'Cars.Ano',
             'Cars.Modelo',
             'Parts_manufacture.Nome_do_fabricante',
             'Parts_levels.Description_Levels'  ,
             'Parts_Types.Description_Types',
             'Suppliers.Suppliers_details',
             'Parts.id_Parts'
         )
          .innerJoin('Cars','Parts.id_Cars','=','Cars.id')
          .innerJoin('Parts_manufacture','Parts.id_Parts_manufacture','=','Parts_manufacture.id')
          .innerJoin('Parts_levels','Parts.id_Parts_levels','=','Parts_levels.id')
          .innerJoin('Parts_Types','Parts.id_Parts_Types','=','Parts_Types.id')
          .leftJoin('Suppliers','Parts.id_Suppliers','=','Suppliers.id')
          .innerJoin('Car_Manufactures','Cars.id_Fabricante','=','Car_Manufactures.id')
          .where('Parts.id',id).first();
          
          if(!part){
            throw `Este id do carro não existe.` 
          }
          return part;
     },
    
    // async post(data:any, callback:any)
    //     {
    //         const { id_Cars,
    //             id_Parts_manufacture, 
    //             id_Parts_levels,
    //             id_Parts_Types,
    //             id_Suppliers,
    //             Part_name,
    //             id_Parts,  
    //     }  = data;
    //             const insertParts= await connection('Parts').insert({id_Cars,
    //                 id_Parts_manufacture, 
    //                 id_Parts_levels,
    //                 id_Parts_Types,
    //                 id_Suppliers,
    //                 Part_name,
    //                 id_Parts,  }); 
    //                 callback(insertParts);
    // },
}