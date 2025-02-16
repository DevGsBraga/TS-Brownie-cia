import mysql from 'mysql'
import dotenv from 'dotenv';

dotenv.config();

export const db = () => {
    const conectaDB = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })

    conectaDB.connect((err) => {
        if(err) {
            console.error(`Error ao conectar ao banco de dados: ${err}`)
            return
        }
        console.log('Conectado ao banco de dados MySQL')
    })

    return conectaDB;
}
