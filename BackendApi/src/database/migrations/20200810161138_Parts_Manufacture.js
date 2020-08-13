
exports.up = function(knex ) {
    return knex.schema.createTable('Parts_manufacture', (table) => {
        table.increments();
        table.string('Nome_do_fabricante',50).notNullable();
        table.unique('Nome_do_fabricante');
    } );
};

exports.down = function(knex ) {
    return knex.schema.dropTable('Parts_manufacture'); 
};
