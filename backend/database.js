const Pool = require("pg").Pool; 
const pool  = new Pool({
  user : 'postgres',
  host: 'postgres.cn5njhghnkhc.us-east-2.rds.amazonaws.com',
  database: 'postgres',
  password:'kamal016',
  port:'5432',
});


module.exports = pool;
// const Pool = require("pg").Pool;

// const pool = new Pool({
//   host: "localhost",
//   user: "postgres",
//   password: "kthl8822",
//   port: 5432,
//   database: "jwtauth"
// });

// module.exports = pool;