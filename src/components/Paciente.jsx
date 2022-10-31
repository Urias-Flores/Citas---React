import {flagEnabled} from "tailwindcss/lib/featureFlags.js";

const name = ({ pacientes, setPaciente }) => {

    const { Nombre, Propietario, Correo, Alta, Sintomas } = pacientes;

    return (
        <>
            <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-normal normal-case">{Nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                    <span className="font-normal normal-case">{Propietario}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Correo electronico: {''}
                    <span className="font-normal normal-case">{Correo}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
                    <span className="font-normal normal-case">{Alta}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                    <span className="font-normal normal-case">
                        {Sintomas}
                    </span>
                </p>

                <div className="flex justify-between mt-10">
                    <button
                        type="button"
                        className="px-4 py-2 bg-indigo-700 hover:bg-indigo-800 uppercase text-white rounded-md font-bold mr-2"
                        onClick={() => {setPaciente(pacientes)}}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-red-700 hover:bg-red-800 uppercase text-white rounded-md font-bold"
                        onClick={
                            () => {
                                setPaciente(...[pacientes].filter(value => value.ID === pacientes.ID))
                            }
                        }
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </>
    )
}

export default name