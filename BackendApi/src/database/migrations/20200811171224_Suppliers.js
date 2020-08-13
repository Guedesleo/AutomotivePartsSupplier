exports.up = function(knex) {
    return knex.schema.createTable('Suppliers', (table) => {
        table.increments();
        table.string('Suppliers_details',90).notNullable();
        table.unique('Suppliers_details');
    } );
};

exports.down = function(knex) {
    return knex.schema.dropTable('Suppliers'); 
};
