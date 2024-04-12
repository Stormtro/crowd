import React from 'react'

function sobreNosotos() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sobre nosotros</title>
  {/* font awesome cdn  */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  {/* cdn de tailwing y daisyui */}
  <link
    href="https://cdn.jsdelivr.net/npm/daisyui@4.10.1/dist/full.min.css"
    rel="stylesheet"
    type="text/css"
  />
  {/* navbar */}
  <header>
    <nav className="w-[90%] max-lg:w-screen mx-auto flex justify-between max-lg:flex-wrap items-center ">
      {/* logo */}
      <div className="p-1 max-lg:order-1">
        <a className="w-16 max-lg:m-4" href="index.php">
          <img src="img/logonav.jpeg" alt="" />
        </a>
      </div>
      {/* link de referencia  */}
      <div
        id="menunav"
        className="flex items-center w-full px-5 mx-auto h-fit max-lg:hidden max-lg:order-3 "
      >
        <ul className="flex items-center max-lg:flex-col gap-[4vw] mx-auto ">
          <li>
            <a
              href="buscar_campañas.php"
              className=" hover:text-gray-500 text-[#206A5D] "
            >
              Buscar Campañas
            </a>
          </li>
          <li>
            <a
              href="sobreNosotos.php"
              className=" hover:text-gray-500 text-[#206A5D] "
            >
              Sobre nosotros
            </a>
          </li>
          <li>
            <a
              href="misCampañas.php"
              className=" hover:text-gray-500 text-[#206A5D] "
            >
              Mis Campañas
            </a>
          </li>
          <li>
            <a
              href="IniciarCampañas.php"
              className=" hover:text-gray-500 text-[#206A5D] "
            >
              iniciar Campaña
            </a>
          </li>
        </ul>
      </div>
      {/* botone de iniciar secion user y menu en dispositivos moviles */}
      <div className="flex items-center gap-4 px-3 max-lg:order-2">
        <button
          id="userA"
          className="bg-gradient-to-r from-[#A2D988]/50 to-[#66994E]/10 rounded-full h-11 w-28 text-[#206A5D]"
        >
          iniciar Sesion
        </button>
        {/* user */}
        <div id="userB" className="hidden dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between" href="PerfilAjuste.html">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="PerfilAjuste.html">Settings</a>
            </li>
            <li id="logOut">
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <button id="botonav" className="lg:hidden">
          <i className="fa-solid fa-bars fa-2xl" />
        </button>
      </div>
    </nav>
  </header>
  <h1 className="text-4xl text-center capitalize my-11">en construcción</h1>
  <div className="flex justify-center w-full h-full">
    <iframe
      width={560}
      height={315}
      src="https://www.youtube.com/embed/OBWz8AG8tuU?si=nOlSTJLRq3IQ5hzs?start=0&autoplay=1"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen=""
    />
  </div>
  {/* footer */}
  <footer className="p-10 footer space-x-auto max-lg:justify-items-center">
    <aside>
      <img src="img/foteer.png" alt="" />
      <p className="text-[#206A5D]">
        StarSeed.
        <br /> 2024
      </p>
    </aside>
    <nav className="flex flex-col ">
      <h6 className="footer-title text-[#81B214]">Recaudacion de Fondos</h6>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Tecnologia
      </a>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Salud
      </a>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Emergencia
      </a>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Animales
      </a>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Educacion
      </a>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Animales
      </a>
    </nav>
    <nav className="flex flex-col ">
      <h6 className="footer-title text-[#81B214]">Mas Informacion</h6>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Como Funciona
      </a>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Porque Nosotros
      </a>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Pregustas Frecuentes
      </a>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Soporte Tecnico
      </a>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Contactanos
      </a>
    </nav>
    <nav className="flex flex-col ">
      <h6 className="footer-title self-center text-[#81B214]">Legal</h6>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Terminos de uso
      </a>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Privacy policy
      </a>
      <a className="link link-hover self-center text-[#206A5D] font-medium">
        Cookie policy
      </a>
    </nav>
  </footer>
</>

  )
}

export default sobreNosotos