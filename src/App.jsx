import {useEffect, useState} from "react";
import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import ListadoPaciente from "./components/ListadoPaciente.jsx";
import paciente from "./components/Paciente.jsx";

function App() {
    const [Pacientes, setPacientes] = useState([]);
    const [Paciente, setPaciente] = useState({})

    useEffect(() => {
        const ActualLocalStorage = JSON.parse( localStorage.getItem("Pacientes") ) ?? [];
        setPacientes(ActualLocalStorage);
    }, []);


    useEffect(()=>{
        localStorage.setItem("Pacientes", JSON.stringify( Pacientes ));
    }, [Pacientes]);

    const deletePaciente = (ID) => {
        const NuevoArreglo =  Pacientes.filter(paciente => paciente.ID !== ID);
        setPacientes(NuevoArreglo);
    };

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
                    deletePaciente = {deletePaciente}
                />
            </div>
        </div>
    )
}

export default App