import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center text-amber-50">
        Listado Pacientes
      </h2>
      <p className="text-xl mt-5 nb-10 text-center text-amber-50">
        Administra tus {""}
        <span className="text-amber-200 font-bold">Pacientes y Citas</span>
      </p>
						<Paciente />
						<Paciente />
						<Paciente />
						<Paciente />

    </div>
  );
};

export default ListadoPacientes;
