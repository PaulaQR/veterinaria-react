const Paciente = ({ paciente }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente;
  return (
    <div className="mx-5 my-10 bg-amber-50 shadow-lg  px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-amber-600 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case ">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-amber-600 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case ">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-amber-600 uppercase">
        Email: {""}
        <span className="font-normal normal-case ">{email}</span>
      </p>
      <p className="font-bold mb-3 text-amber-600 uppercase">
        Fecha De Alta: {""}
        <span className="font-normal normal-case ">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-amber-600 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case "> {sintomas} </span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-amber-800 hover:bg-amber-700 text-amber-50 font-bold uppercase rounded-lg"
        >
          EDITAR
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-800 hover:bg-red-700 text-amber-50 font-bold uppercase rounded-lg"
        >
          ELIMINAR
        </button>
      </div>
    </div>
  );
};

export default Paciente;
