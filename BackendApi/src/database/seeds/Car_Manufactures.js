
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Car_Manufactures').del()
    .then(function () {
      // Inserts seed entries
      return knex('Car_Manufactures').insert([
        {id: 1, Name: 'Volvo',fabricante_url:'https://seeklogo.com/images/V/volvo_black_and_white-logo-DE77307891-seeklogo.com.png'},
        {id: 2, Name: 'Chevolet',fabricante_url:'https://image.shutterstock.com/image-photo/frankfurt-sept-24-chevrolet-company-600w-85296106.jpg'},
        {id: 3, Name: 'Ford',fabricante_url:'https://image.shutterstock.com/image-photo/kiev-ukraine-march-21-2015-600w-267660191.jpg'}
      ]);
    });
};
