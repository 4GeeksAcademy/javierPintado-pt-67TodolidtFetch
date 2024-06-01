import React,{useState} from "react";


const Home = () => {
	//
	const [nuevaTarea, setNuevatarea] = useState("")
	const [tareas, setTareas] = useState(["make the bed","wash my hands"])

	//
	const actualizarValorNuevaTarea = (event) => {
		setNuevatarea(event.target.value)
	}

	const adicionarNuevatarea = (event) => {
		event.preventDefault()
		setTareas([...tareas, nuevaTarea])
		setNuevatarea("")
	}


	const borrarElementos = (index) => {
		const arrayModificado = tareas.filter((item, i) =>i !== index)
		setTareas(arrayModificado)
	}

	return (
		<div className="w-50 m-auto mt-5">
			<form onSubmit={adicionarNuevatarea}>
				<div className="mb-3">
					<input className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" value={nuevaTarea} onChange={actualizarValorNuevaTarea} />
				</div>
			</form>
			<ul>
				{
					tareas.map((item,index) =>{
						return(<li key={index}>{item} <button className="btn btn-primary" onClick={() => borrarElementos(index)}>x</button> </li>)
					})
				}
			</ul>

			{tareas.lenght === 0 ? <span></span> : <div>{tareas.lenght}</div>}
		</div>
	)
}





export default Home;
