import { useState } from "react"

const AgregarTarea = ({ onAdd }) =>{
    


    const [texto, setTexto] = useState ('')
    const [fecha, setFecha] = useState ('')

    const [terminado, setTerminado] = useState (false)


    const onSubmit = (e) => {
        e.preventDefault()
        if (!texto){
            alert('Por favor coloca la descripcion de la tarea')
            return
        }
        if (!fecha){
            alert('Por favor coloca la fecha')
            return
        }

        onAdd ({ texto , fecha, terminado })

        setTexto('')
        setFecha('')
        setTerminado(false)
    }

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Tareas: </label>
                <input type= 'text' placeholder ='Agrega una Tarea' value={texto} onChange={(e)=> setTexto(e.target.value)} />
            </div>

            <div className = 'form-control from-control-check'>
                <label>Fecha: </label>
                <input type= 'text' placeholder ='Agrega la fecha' value={fecha} onChange={(e)=> setFecha(e.target.value)} />
            </div>

            <div className = 'form-control form-control-check' >
                <label>Terminada:</label>
                <input  type= 'checkbox' checked={terminado} value={terminado} onChange={(e)=> setTerminado(e.currentTarget)} />
            </div>

            <input type="submit" value='Agregar Tarea' className ='btn-block btn'/>

        </form>
    )
}

export default AgregarTarea