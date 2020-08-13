
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Parts_manufacture').del()
    .then(function () {
      // Inserts seed entries
      return knex('Parts_manufacture').insert([
        {Nome_do_fabricante:"Jahu"},
        {Nome_do_fabricante:"Volvksgagem"},
        {Nome_do_fabricante:"Ford"}
      ]);
    });
};
