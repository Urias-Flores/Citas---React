import { useState } from "react";
import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import ListadoPaciente from "./components/ListadoPaciente.jsx";
import paciente from "./components/Paciente.jsx";

function App() {
    const [Pacientes, setPacientes] = useState([]);

    return (
        <div className="container mx-auto mt-5">
            <Header/>
            <div className="md:flex mt-5">
                <Formulario
                    Pacientes={Pacientes}
                    setPacientes={setPacientes}
                />
                <ListadoPaciente
                    Pacientes = {Pacientes}
                />
            </div>
        </div>
    )
}

export default App