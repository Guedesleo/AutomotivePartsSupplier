
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Parts_Types').del()
    .then(function () {
      // Inserts seed entries
      return knex('Parts_Types').insert([
        {Description_Types: 'Engine components and parts'},
        {Description_Types: 'Braking system'},
        {Description_Types: 'Suspension and steering systems'}
      ]);
    });
};
