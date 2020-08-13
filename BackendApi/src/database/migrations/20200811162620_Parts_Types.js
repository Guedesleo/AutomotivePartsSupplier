
exports.up = function(knex) {
    return knex.schema.createTable('Parts_Types', (table) => {
        table.increments();
        table.string('Description_Types',90).notNullable();
        table.unique('Description_Types');
    } );
};

exports.down = function(knex) {
    return knex.schema.dropTable('Parts_Types'); 
};
