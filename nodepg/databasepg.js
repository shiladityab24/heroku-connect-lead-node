const { Pool, Client } = require('pg');
const connectionString = 'postgres://bpyxzhryunkvsy:fe9ec6e2b1d056086a63975a66c4c830d8c30a3243a0bb3efe37f17bda6d36a0@ec2-54-156-8-21.compute-1.amazonaws.com:5432/daoqivp0v95lqr'
 
// const pool = new Pool({
//   connectionString,
// })
 
// await pool.query('SELECT NOW()')
// await pool.end()
 
const client = new Client({
  connectionString,
})
 
await client.connect()
 
await client.query(sqlQuery)
.then(() => {
  console.log('Schema changed successfully');
})
.catch((err) => {
  console.error('Error changing schema:', err);
})
.finally(() => {
  // Close the database connection
  pool.end()
    .then(() => {
      console.log('Disconnected from PostgreSQL database');
    })
    .catch((err) => {
      console.error('Error disconnecting from PostgreSQL database:', err);
    });
});

await client.end()


















// pool.connect();

// const sqlQuery = `
//   ALTER TABLE lead
//   SET SCHEMA salesforce;
// `;


// pool.query(sqlQuery)
//   .then(() => {
//     console.log('Schema changed successfully');
//   })
//   .catch((err) => {
//     console.error('Error changing schema:', err);
//   })
//   .finally(() => {
//     // Close the database connection
//     pool.end()
//       .then(() => {
//         console.log('Disconnected from PostgreSQL database');
//       })
//       .catch((err) => {
//         console.error('Error disconnecting from PostgreSQL database:', err);
//       });
//   });

