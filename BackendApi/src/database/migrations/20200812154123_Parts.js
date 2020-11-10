
exports.up = function(knex) {
    return knex.schema.createTable('Parts', (table) => {
        table.increments();
        table.integer('id_Cars').notNullable().references('Cars.id');
        table.integer('id_Parts_manufacture').notNullable().references('Parts_manufacture.id');
        table.integer('id_Parts_levels').notNullable().references('Parts_levels.id');
        table.integer('id_Parts_Types').notNullable().references('Parts_Types.id');
        table.string('Part_name ', 50).notNullable();
        table.unique('Part_name');
        table.integer('id_Parts').references('Parts.id');
        table.integer('id_Suppliers').references('Suppliers.id');
    } );
};

exports.down = function(knex) {
    return knex.schema.dropTable('Parts'); 
};
