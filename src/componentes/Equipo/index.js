import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {

    //Destructuración para ahorrar tanto uso de props.datos
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const obj = { 
        backgroundColor: hexToRgba(colorPrimario, 0.6) 
        }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input 
                    type="color"
                    className="input-color"
                    value={ hexToRgba(colorPrimario, 0.6) }
                    onChange={ (evento) => {
                        actualizarColor(evento.target.value, id)
                        
                    } }
                    
                />
                <h3 style={{ borderColor: colorPrimario }} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador = {eliminarColaborador}
                            like = { like }
                        />)
                    }

                </div>
            </section>
        }
    </>
}

export default Equipo 

/*Lee los valores del arreglo equipos[] ubicado en el archivo
App.js a traves de props "datos" y luego el valor de cada clave en el arreglo*/

/*             <></> Se llaman fragments son parte de JSX y ayudan a darle formato        */ 