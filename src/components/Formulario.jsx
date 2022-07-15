import { useState, useEffect } from "react";
import Error from "./Error";
const Formulario = ({pacientes, setPacientes}) => {
  // No pueden ir dentro de condicionales y tampoco se pueden poner después de un RETURN
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true)
						return;
    } 
				setError(false)

        // Objeto de Paciente
        
        const objetoPaciente = {
          nombre,
          propietario,
          email,
          fecha,
          sintomas,
          id: generarId()
        }
        // console.log(objetoPaciente)
        // En React solo Utilizar metodos inmutables... 
        // Método copia ... SpreadOperator 
        setPacientes([...pacientes, objetoPaciente])

        // Reiniciar el Form 
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('') 

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center text-amber-50">
        Seguimiento Pacientes
      </h2>
      <p className="text-amber-50 text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-amber-200 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-amber-50 shadow-xl rounded-lg py-10 px-5 mb-10"
      >
        {error && 
        <Error>
          {/* // De esta manera (Utilizando HTML) se puede pasar vario contenido HTML  */}
          <p>
           Todos los campos son obligatorios
          </p>
        </Error>
        }

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-amber-600 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-amber-600 rounded-md text-amber-600"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-amber-600 uppercase font-bold"
          >
            Nombre del propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-amber-600 rounded-md text-amber-600"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-amber-600 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-amber-600 rounded-md text-amber-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-amber-600 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Email Del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-amber-600 rounded-md text-amber-600"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-amber-600 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-amber-600 rounded-md text-amber-600 "
            placeholder="Describe los sintomas del paciente"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-amber-800 w-full p-3 text-amber-50 uppercase font-bold hover:bg-amber-700 cursor-pointer transition-all rounded-md"
          value="agregar paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
