import Paciente from "./Paciente.jsx";

const ListadoPaciente = ({ Pacientes }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 ">
            <h2 className="font-black text-center text-3xl">Listado de pacientes</h2>
            <p className="text-xl text-center mt-5 mb-3 font-bold">Administra tus {''}
                <span className="text-indigo-600 font-black">pacientes y citas</span>
            </p>

            <div className="md:h-screen md:overflow-y-scroll">
                { Pacientes.map( p => (
                    <Paciente
                        pacientes = {p}
                    />
                    ))}
            </div>
        </div>
    )
}

export default ListadoPaciente