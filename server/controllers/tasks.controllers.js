import {pool} from "../db.js"

export const getTasks=(req, res) =>{
    res.send('obteniendo tareas')
}

export const getTask=(req, res) =>{
    res.send('obteniendo tareas con id')
}

export const createTask=async(req, res) =>{
    const{n_userAdmin, passw}=req.body
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

export const updateTask=(req, res) =>{
    res.send('actualizando tarea')
}


export const deleteTask=(req, res) =>{
    res.send('eliminando tarea')
}