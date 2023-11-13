import fastify from "fastify"
import crypto from 'node:crypto'
import { transactionsRoutes } from "./routes/transactions"
import { env } from "./env"
import cookie from "@fastify/cookie"

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes,{
    prefix: 'transactions'
});

// app.get('/hello', async () =>{
//     const transaction = await knex('transactions').insert({
//         id: crypto.randomUUID(),
//         title: 'Transação teste',
//         amount: 100.00,
//     }).returning('*');

//     return transaction
// })

app.listen({
    port: env.PORT
}).then(() =>{
    console.log('HTTP Server Running!')
})