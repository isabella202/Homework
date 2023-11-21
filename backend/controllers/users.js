const listarUsuarios = async(req, res = {}) => {
    const usuarios = await Usuario.find().populate('tareas', 'title')

    try{
       res.status(200).json({
                ok: true,
                usuarios,
            })
        } catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error Interno',
        })
    }
}

module.exports =  {
    listarUsuarios
}