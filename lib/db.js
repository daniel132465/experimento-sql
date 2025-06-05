import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "192.168.56.1",  // Reemplaza con tu IP de Windows
  user: "root",
  password: "",
  database: "snack_db",
});

export default db;