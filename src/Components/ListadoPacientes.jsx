import Pacientes from "./Pacientes"


const ListadoPacientes = ({ MisPacientes, setPaciente, eliminarPaciente }) => {


  return (


    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {MisPacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pactientes</h2>

          <p className="text-xl - mt-5 mb-10 text-center">Admisitra tus {''}
            <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
          </p>

          {MisPacientes.map(paciente => <Pacientes key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>)}

        </>
      )
        :
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

          <p className="text-xl - mt-5 mb-10 text-center">Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold"> y apareceran en este lugar</span>
          </p>

        </>


      }





    </div>
  )
}

export default ListadoPacientes
