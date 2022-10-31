import {useState, useEffect} from "react";
import Error from "./Error.jsx";
import paciente from "./Paciente.jsx";

function Formulario({ setPacientes, Pacientes, Paciente, setPaciente }){

    const [Nombre, setNombre] = useState("");
    const [Propietario, setPropietario] = useState("");
    const [Correo, setCorreo] = useState("");
    const [Alta, setAlta] = useState("");
    const [Sintomas, setSintomas] = useState("");

    const [error, setError] = useState(false);

    const generateID = () =>{
        const fecha = Date.now().toString(36);
        const random = Math.random().toString(36).substr(2);

        return fecha + random;
    };

    useEffect(() => {
        if(Object.keys(Pacientes).length > 0){
            setNombre(Paciente.Nombre);
            setPropietario(Paciente.Propietario);
            setCorreo(Paciente.Correo);
            setAlta(Paciente.Alta);
            setSintomas(Paciente.Sintomas);
        }
    }, [Paciente]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if([Nombre, Propietario, Correo, Alta, Sintomas].includes("")){
            setError(true);
            return;
        }


        const NuevoPaciente = {Nombre, Propietario, Correo, Alta, Sintomas}

        if(!Paciente.ID){
            //Agregando nuevo paciente
            NuevoPaciente.ID = generateID()
            setPacientes([...Pacientes, NuevoPaciente]);
        }else{
            //Editan paciente en memoria y editando el arreglo de pacientes actual
            NuevoPaciente.ID = Paciente.ID;
            const NuevoArregloPacientes = Pacientes.map( pacienteState => pacienteState.ID == Paciente.ID ? NuevoPaciente : pacienteState );
            setPacientes(NuevoArregloPacientes);
            setPaciente({});
        }

        setError(false);
        clearFields();
    };

    const clearFields = () => {
        setNombre("");
        setPropietario("");
        setCorreo("");
        setAlta("");
        setSintomas("");
    };

    return(
        <div className="md:w-2/5 lg:w-2/5 mx-5">
            <h2 className="font-black text-center text-3xl">Seguimiento de pacientes</h2>
            <p className="text-xl text-center mt-5 font-bold mb-5">Ingresa paciente y
                <span className="text-indigo-600 font-black"> Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg px-5 py-10 mb-10" onSubmit={handleSubmit}>

                {error && <Error><p>Todos los campos son obligatorios</p></Error> }

                <div className="mb-5">
                    <label className="block text-gray-700 font-bold uppercase" htmlFor="NombreMascota">Nombre de la mascota</label>
                    <input
                        type="text"
                        placeholder="ingrese el nombre de la mascota..."
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="NombreMascota"
                        value={Nombre}
                        onChange={ (e) => { setNombre(e.target.value); } }
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 font-bold uppercase" htmlFor="NombrePropietario">Nombre del propietario</label>
                    <input
                        type="text"
                        placeholder="ingrese el nombre del propietario..."
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="NombrePropietario"
                        value={Propietario}
                        onChange={ (e) => { setPropietario(e.target.value); } }
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 font-bold uppercase" htmlFor="Correo">Correo electroníco</label>
                    <input
                        type="email"
                        placeholder="ingrese el nombre del propietario..."
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="Correo"
                        value={Correo}
                        onChange={ (e) => { setCorreo(e.target.value); } }
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 font-bold uppercase" htmlFor="Alta">Alta</label>
                    <input
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="Alta"
                        value={Alta}
                        onChange={ (e) => { setAlta(e.target.value); } }
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 font-bold uppercase" htmlFor="Sintomas">Sintomas</label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="Sintomas"
                        placeholder="Define los síntomas"
                        value={Sintomas}
                        onChange={ (e) => { setSintomas(e.target.value); } }
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 rounded-md w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={ Paciente.ID ? "Guardar cambios" : "Agregar paciente" }
                />
            </form>
        </div>
    )
}

export default Formulario