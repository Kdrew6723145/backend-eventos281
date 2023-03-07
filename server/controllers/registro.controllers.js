import {pool} from "../db.js"


export const registrarUsuario=async (req, res) => {
    const{n_userAdmin, passw}=req.body
    console.log(typeof passw === "string")

    const [result]=await pool.query(
        "INSERT into administrador(n_userAdmin, passw) values (?,?)",
        [n_userAdmin,
        passw]
    )

    console.log(result)
    res.json({
        id_admin: result.insertId,
        n_userAdmin,
        passw
    })
}