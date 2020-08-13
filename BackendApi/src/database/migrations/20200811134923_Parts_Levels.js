
exports.up = function(knex) {
    return knex.schema.createTable('Parts_levels', (table) => {
        table.increments();
        table.string('Description_Levels',90).notNullable();
        table.unique('Description_Levels');
    } );
};

exports.down = function(knex) {
    return knex.schema.dropTable('Parts_levels'); 
};
