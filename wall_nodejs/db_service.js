const mariadb = require('mariadb');

function query(queryString){
    return new Promise((resolve, reject)=>{
        mariadb.createConnection({
            host : process.env.MARIADB_HOST, 
            user : process.env.MARIADB_USER, 
            password : process.env.MARIADB_PASSWORD,
            database : process.env.MARIADB_DATABASE
        })
        .then(conn => {
            conn.query(queryString)
            .then((result) => {
                conn.close();
                resolve(result);
            })
            .catch(err => {
                conn.close();
                reject(err);
            })
        })
        .catch(err => {
            reject(err);
        });
    });
}

module.exports={query};
