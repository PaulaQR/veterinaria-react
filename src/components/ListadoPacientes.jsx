import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-amber-50">
            Listado Pacientes
          </h2>
          <p className="text-xl mt-5 nb-10 text-center text-amber-50">
            Administra tus {""}
            <span className="text-amber-200 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            // Nunca utilizar el indice como Key
            <Paciente key={paciente.id} paciente={paciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center text-amber-50">
            No hay pacientes
          </h2>
          <p className="text-xl mt-5 nb-10 text-center text-amber-50">
            Comienza agregando pacientes {""}
            <span className="text-amber-200 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};
export default ListadoPacientes;
