
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Parts').del()
    .then(function () {
      // Inserts seed entries
      return knex('Parts').insert([
        {Part_name:'Eixo',id_Cars: 1 , id_Parts_manufacture: 2 , id_Parts_levels: 3 ,id_Parts_Types: 3 ,id_Suppliers:2 ,id_Parts:0},
        {Part_name:'Camshaft',id_Cars: 3, id_Parts_manufacture: 1, id_Parts_levels: 1,id_Parts_Types: 1 ,id_Suppliers: 1,id_Parts:0},
        {Part_name:'Disc Brake',id_Cars: 2, id_Parts_manufacture: 3, id_Parts_levels: 2,id_Parts_Types: 2 ,id_Suppliers: 3,id_Parts:1}
      ]) 
    });
};
