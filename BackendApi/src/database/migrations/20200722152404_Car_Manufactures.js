
exports.up = function(knex) {
    return knex.schema.createTable('Car_Manufactures', (table) => {
        table.increments();
        table.string('name_fabricante',50).notNullable();
        table.string('fabricante_url',250).notNullable();
        table.unique('name_fabricante');
    } );
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Car_Manufactures');  
};
