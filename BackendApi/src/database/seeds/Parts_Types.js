
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Parts_Types').del()
    .then(function () {
      // Inserts seed entries
      return knex('Parts_Types').insert([
        {Description_Types: 'Cambio'},
        {Description_Types: 'Girabregim'},
        {Description_Types: 'Jogo de Tucho'}
      ]);
    });
};
