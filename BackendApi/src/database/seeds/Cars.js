
exports.seed = function(knex ) {
  // Deletes ALL existing entries
  return knex('Cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cars').insert([
        { id_Fabricante: '1',NomeCarro:"XC60", ano: '2012', modelo:'2.0'},
        { id_Fabricante: '3',NomeCarro:"Fiesta" ,ano: '2007', modelo:'1.0'},
        { id_Fabricante: '2',NomeCarro:"Corsa", ano: '1999', modelo:'1.4'}
      ]);
    });
};
