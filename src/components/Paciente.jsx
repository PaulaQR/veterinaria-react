const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-amber-50 shadow-lg  px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-amber-600 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case ">Kiara</span>
      </p>
      <p className="font-bold mb-3 text-amber-600 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case ">Paula</span>
      </p>
      <p className="font-bold mb-3 text-amber-600 uppercase">
        Email: {""}
        <span className="font-normal normal-case ">correo@gmail.com</span>
      </p>
      <p className="font-bold mb-3 text-amber-600 uppercase">
        Fecha De Alta: {""}
        <span className="font-normal normal-case ">13 Julio 2022</span>
      </p>
      <p className="font-bold mb-3 text-amber-600 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quis
          quod exercitationem ratione est possimus dolor, optio at delectus
          numquam facilis doloribus necessitatibus deserunt eum suscipit, magni
          voluptate atque odio.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
