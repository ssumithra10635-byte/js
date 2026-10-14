const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sumi",
    database: "sumi_123"
});

connection.connect((err) => {
    if (err) {
        console.log("Connection failed");
        console.log(err);
        return;
    }

    console.log("Connection successful!");

    const query = "SELECT id, name FROM student_connection";

    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(result);
        connection.end();
    });
});