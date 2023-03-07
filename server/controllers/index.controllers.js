import {pool} from "../db.js"


export const getIndex=async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM administrador");
    console.log(rows);
    res.json(rows)

    //res.send('Conexion existosa')
}