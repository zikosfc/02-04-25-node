import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'ziko'
}).promise();

const result = await pool.query("select * from `sakila` .`store`;");
console.log(result)