/* arquivo para sobrescrever os tipos definidos de algumas libs
.d -> definition
*/

//eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables'{
    export interface Tables{
        transactions: {
            id: string,
            title: string,
            amount: number,
            created_at: string,
            
            session_id?: string
        }
    }
}
