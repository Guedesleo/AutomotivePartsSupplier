
exports.up = function(knex) {
    return knex.schema.createTable('Cars', (table) => {
        table.increments();
        table.integer('id_Fabricante').notNullable().references('Car_Manufactures.id');
        table.string('NomeCarro',50).notNullable();
        table.integer('Ano',4).notNullable();
        table.string('Modelo',6).notNullable();
    } );
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Cars');  
};
