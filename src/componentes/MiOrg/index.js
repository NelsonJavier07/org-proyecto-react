import { useState } from 'react'
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estado -- hooks
    // useState()
    // cons [nombreVariable, funcionActualiza] = usestate(ValorInicial)
    console.log(props)
    // const [mostrar, actualizaMostrar] = useState(true)
    
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar Elemento");
    //     actualizaMostrar(!mostrar);
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="./img/add.png" alt="add" onClick={ props.cambiarMostrar } />
    </section>
}


export default MiOrg