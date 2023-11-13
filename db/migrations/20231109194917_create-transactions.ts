import { Knex } from "knex";

//npm run knex -- migrate:latest -> vai ler e executar todas as migrations
//npm run knex -- migrate:rollback -> desfaz a migration
//se uma migration for enviada para a produção ou para o time, ela NÃO pode ser mais editada
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('transactions', (table) =>{
        table.uuid('id').primary()
        table.text('title').notNullable()
        table.decimal('amount', 10,2).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('transactions')
}

