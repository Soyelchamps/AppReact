import { useState } from 'react'
import Header from './components/Header'
import AgregarTarea from './components/AgregarTarea'
import Tareas from './components/Tareas'

function App() {

	const [verFormulario, setVerFormulario] = useState(false)

	const [tareas, setTareas] = useState([
		{
			id: 1,
			texto: 'Ir al cine',
			fecha: '02 de Febrero de 2022',
			terminado: true,
		},
		{
			id: 2,
			texto: 'Comprar en el supermercado',
			fecha: '10 de Febrero de 2022',
			terminado: false,
		},
		{
			id: 3,
			texto: 'Hacer app en React',
			fecha: '11 de Febrero de 2022',
			terminado: false,
		}
	])
	//Agregar una Tarea
		const	addTarea = (tarea) => {
			//console.log(tarea)
			const id=Math.floor(Math.random()*10000)+1
			//console.log(id)
			const nuevaTarea = { id, ...tarea}
			setTareas([...tareas, nuevaTarea])

		}

	//Eliminar una tarea
	const deleteTarea = (id) => {
		//console.log('borrar ', id)
		setTareas(tareas.filter((tarea) => tarea.id !== id))
	}

	//Marcar la tarea como terminada
	const finTarea = (id) => {
		//console.log(id)
		setTareas(tareas.map((tarea) => tarea.id === id ? { ...tarea, terminado: !tarea.terminado } : tarea))
	}

	return (
		<section className='container'>
			<Header onAdd={()=>setVerFormulario(!verFormulario)} mostrarForm={verFormulario}/>
			{verFormulario  && <AgregarTarea onAdd={addTarea} />}
			{tareas.length > 0 ? <Tareas tareas={tareas} onDelete={deleteTarea} onToggle={finTarea} /> : 'No hay tareas para mostrar'}
		</section>
	)
}

export default App
