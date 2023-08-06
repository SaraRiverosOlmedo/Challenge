import React from "react";
import { LoginContext } from "../Context/LoginProvider";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";



const Login = (props) => {
  const {
    email,
    setError,
    password,
    name,
    userLogin,
    userRegister,
    esRegistro,
    setName,
    setEsRegistro,
    setPassword,
    error,
    setEmail,
  } = React.useContext(LoginContext);

  

  const loginCount = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      console.log("Datos vacíos email!");
      setError("Datos vacíos email!");
      return;
    }
    if (!password.trim()) {
      console.log("Datos vacíos pass!");
      setError("Datos vacíos pass!");
      return;
    }
    if (password.length < 6) {
      console.log("6 o más carácteres");
      setError("La contraseña debe tener como mínimo 6 caracteres");
      return;
    }
    // console.log("Registro exitoso");
    setError(null);

    if (esRegistro) {
      userRegister(email, password, name);
    }
    userLogin(email, password);
  };

  return (
    <main className=" img-fluid" style={{ backgroundImage: 'url("https://i.ibb.co/LQngrfq/pexels-evg-kowalievska-1170986opaco.jpg")', backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', height: '100vh', overflowY: 'auto' }}>
      <div className="bg-opacity-50 bg-black absolute top-0 left-0 w-full h-full"></div>
      <img src="https://images.jumpseller.com/store/luna-pets/store/logo/logo_2.png?1682603062" alt="logo" className="mx-auto mt-5" style={{ width: '300px', height: 'auto', margin:'25px'}} />
      <div className="container_flex">
        <div className="textLogin">
          <h2 class="slider-block__title">Los <b>mejores servicios</b> para tu mascota.</h2>
          <h5 className="slider-block__text">Tenemos para ti paseos, visitas, alojamiento, cuidados a domicilio y más.</h5>
          <Link to={'https://lunapets.co/'}>
          <button className="ConocerMas">
          Quiero Saber Más!
          
        </button>
        </Link>
        </div>
        
      <div className='displayfle'>
      <h2 className="subtitulo_bienvenidos">
        {" "}
        {esRegistro ? "Registrate" : "  Ingresar Cuenta"}
      </h2>
      
      <form onSubmit={loginCount} className="bg-pink-100 p-5 rounded-lg">
        <div className="mb-6">
          {error ? (
            <div
              className="bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline"> {error} </span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
            </div>
          ) : null}

          {esRegistro ? (
            <div className="mb-6">
              <label className="block mb-2 sm:text-base lg:text-lg text-gray-900 dark:text-gray-300">
                {" "}
                Nombre{" "}
              </label>
              <input
                type="text"
                id="nameUser"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nombre"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          ) : (
            ""
          )}

          <label className="block mb-2  text-gray-900 dark:text-gray-300">
            {" "}
            Correo Electrónico{" "}
          </label>

          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@correo.cl"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2  text-gray-900 dark:text-gray-300">
            {" "}
            Contraseña{" "}
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="flex justify-center ">
          {" "}
          <button
            type="submit"
            className="mt-1 justify-center text-white bg-pink-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {esRegistro ? "Registrar" : "Acceder ➞"}
          </button>{" "}
          <p className="text-center">
        {!esRegistro ? (
           <Link to={`/reset`}>
          <button
            className="forget mt-2 "
            type="button"
          >
            ¿Olvidaste tu contraseña?
          </button>
          </Link>
        ) : null}
      </p>
          <p className="text-center mt-6 text-xl text-bold">
        <button
          className="RegisterStyle"
          type="button"
          onClick={() => setEsRegistro(!esRegistro)}
        >
          {esRegistro ? "¿Ya tienes cuenta?" : "Registrate Aquí"}
        </button>
      </p>
      
        </div>
      </form>
      </div>
      </div>
      <Footer />
    </main>
  );
};

export default Login;
