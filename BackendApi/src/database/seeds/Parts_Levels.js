
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Parts_levels').del()
    .then(function () {
      // Inserts seed entries
      return knex('Parts_levels').insert([
        {Description_Levels: 'Bloco do Motor'},
        {Description_Levels: 'Cabeçote'},
        {Description_Levels: 'Trasmissão'}
      ]);
    });
};
