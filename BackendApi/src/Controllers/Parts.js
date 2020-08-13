const connection = require('../database/connection');

module.exports  =   {

    async index(request, response) {
        
        const Parts = await connection('Parts')
            .innerJoin('Cars','Parts.id_Cars','=','Cars.id')
            .innerJoin('Parts_manufacture','Parts.id_Parts_manufacture','=','Parts_manufacture.id')
            .innerJoin('Parts_levels','Parts.id_Parts_levels','=','Parts_levels.id')
            .innerJoin('Parts_Types','Parts.id_Parts_Types','=','Parts_Types.id')
            .innerJoin('Suppliers','Parts.id_Suppliers','=','Suppliers.id');

        return response.status(200).json(Parts);
    },
}