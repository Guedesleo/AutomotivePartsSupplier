
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Suppliers').del()
    .then(function () {
      // Inserts seed entries
      return knex('Suppliers ').insert([
        {Suppliers_details: 'Rateiro Auto peças'},
        {Suppliers_details: 'Galo Auto Pecas'},
        {Suppliers_details: 'Lopes de Oliveira'}
      ]);
    });
};
