import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vetsystem",
});

if (!db.connect) {
  console.log("Error connecting to database");
}
