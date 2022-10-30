import {useEffect, useState} from "react";
import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import ListadoPaciente from "./components/ListadoPaciente.jsx";
import paciente from "./components/Paciente.jsx";

function App() {
    const [Pacientes, setPacientes] = useState([]);
    const [Paciente, setPaciente] = useState({})

    return (
        <div className="container mx-auto mt-5">
            <Header/>
            <div className="md:flex mt-5">
                <Formulario
                    Pacientes={Pacientes}
                    setPacientes={setPacientes}
                    Paciente = {Paciente}
                    setPaciente = {setPaciente}
                />

                <ListadoPaciente
                    Pacientes = {Pacientes}
                    setPaciente = {setPaciente}
                />
            </div>
        </div>
    )
}

export default App