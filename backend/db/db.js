import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Agrohealth&service",
});

if (!db.connect) {
  console.log("Error connecting to database");
}
