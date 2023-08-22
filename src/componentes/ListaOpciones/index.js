import "./ListaOpciones.css"


// Metodo map -> arreglo.map( (equipo, index) => {
//     return <option></option>
// } )
const ListaOpciones = (props) => {

    
    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={ props.valor } onChange={ manejarCambio }>
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            { props.equipos.map((equipo, index) => {
                return <option key={index} value={ equipo }>{ equipo }</option>}) }
        </select>
    </div>
}
//En la funcion cuando es una sola instrucción, se puede extraer las llaves {} y el return quedando una sola linea
//{equipo.map((equipo, index) => <option key={index}>{ equipo }</option>)}
export default ListaOpciones