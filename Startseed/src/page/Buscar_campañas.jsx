import React from 'react'

function buscar_campañas() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>StartSeed</title>
  <link rel="stylesheet" href="./js/filtro.js" />
  <link rel="stylesheet" href="./css/estilo.css" />
  <link rel="shortcut icon" href="./img/favicon.png" type="image/x-icon" />
  <link rel="stylesheet" href="./img/foteer.png" />
  <link rel="stylesheet" href="./img/hero.jpg" />
  <link rel="stylesheet" href="./img/logonav.jpeg" />
  <link rel="stylesheet" href="./js/app.js" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
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
  <header>
    <h1>Buscar Campañas</h1>
    <div className="search-bar">
      <input
        type="search"
        className="filtro-tarjeta"
        id="searchInput"
        placeholder="Buscar por título, palabra clave o nombre de la persona"
      />
      <button onclick="search()">Buscar</button>
    </div>
  </header>
  <aside>
    <h2>Filtros</h2>
    <ul
      role="list"
      className="pb-6 space-y-4 text-sm font-medium text-gray-900 border-b border-gray-200"
    >
      <li>
        <a href="#">Tecnologia</a>
      </li>
      <li>
        <a href="#">Arte y Creatividad</a>
      </li>
      <li>
        <a href="#">Diseño</a>
      </li>
      <li>
        <a href="#">Juegos y Entretenimiento</a>
      </li>
      <li>
        <a href="#">Estudios</a>
      </li>
      <li>
        <a href="#">Salud y Bienestar</a>
      </li>
      <li>
        <a href="#">Medio Ambiente y Bienestar</a>
      </li>
      <li>
        <a href="#">Viajes y Turismo</a>
      </li>
      <li>
        <a href="#">Animales y Mascotas</a>
      </li>
      <li>
        <a href="#">Negocios y Emprendimiento</a>
      </li>
    </ul>
  </aside>
  <main>
    <div id="campaignsList">
      {/* Aquí se mostrarán las campañas */}
      <div className="inline-grid grid-cols-3 gap-4 contenedor">
        <div className="tarjetas">
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className="w-full"
              src="https://news.microsoft.com/wp-content/uploads/prod/sites/41/2016/01/Educacion_CREA_02.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                Estudio en Tecnologia
              </div>
              <p className="text-base text-gray-700">
                ayudame a continuar mi estudio en tecnología
              </p>
              <p>$1,000 US</p>
              <progress
                className="w-56 progress progress-success"
                value={70}
                max={100}
              />
              <button className="bg-green-500 rounded-lg boton">
                Dona ya!
              </button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #Tecnologia
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #Estudio
              </span>
            </div>
          </div>
        </div>
        <div className="tarjetas">
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className="w-full"
              src="https://www.shutterstock.com/image-photo/creativity-education-people-concept-group-260nw-693809029.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">Me encanta Dibujar</div>
              <p className="text-base text-gray-700">
                ayudame a que pueda seguir haciendo lo que mas me gusta,
                dibujar, te pido colaboracion de corazón
              </p>
              <p>$1,000 US</p>
              <progress
                className="w-56 progress progress-success"
                value={70}
                max={100}
              />
              <button className="bg-green-500 rounded-lg boton">
                Dona ya!
              </button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #dibujo
              </span>
            </div>
          </div>
        </div>
        <div className="tarjetas">
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className="w-full"
              src="https://cdn-cjpme.nitrocdn.com/RBveHUhgbLfgOUOOlhRIgWHSMTdPvbOz/assets/images/optimized/rev-9d49715/mediactiu.com/wp-content/uploads/2021/04/Por-que-necesito-contratar-los-servicios-de-disen%CC%83o-grafico.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                colaboracion para diseño
              </div>
              <p className="text-base text-gray-700">
                ayudame a convertirme en un diseñador de interiores brindandome
                tu apoyo
              </p>
              <p>$1,000 US</p>
              <progress
                className="w-56 progress progress-success"
                value={70}
                max={100}
              />
              <button className="bg-green-500 rounded-lg boton">
                Dona ya!
              </button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #photography
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #travel
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #winter
              </span>
            </div>
          </div>
        </div>
        <div className="tarjetas">
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className="w-full"
              src="https://imagenes.eltiempo.com/files/image_1200_600/uploads/2020/09/29/5f73309d28451.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">Ayudame a estudiar</div>
              <p className="text-base text-gray-700">
                brindame tu apoyo para que mis hijos puedan seguir estudiando,
                soy madre soltera y quiero que ellos sean profesionales algun
                dia, ayudame por favor
              </p>
              <p>$1,000 US</p>
              <progress
                className="w-56 progress progress-success"
                value={70}
                max={100}
              />
              <button className="bg-green-500 rounded-lg boton">
                Dona ya!
              </button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #photography
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #travel
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #winter
              </span>
            </div>
          </div>
        </div>
        <div className="tarjetas">
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className="w-full"
              src="https://i0.wp.com/encontraste.com.mx/wp-content/uploads/2021/06/CANCER.jpg?fit=768%2C479&ssl=1"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">Salud de mi abuela</div>
              <p className="text-base text-gray-700">
                ayudame a reunir para medicamentos, la salud de mi familiar
                depende de ello y son caros
              </p>
              <p>$1,000 US</p>
              <progress
                className="w-56 progress progress-success"
                value={70}
                max={100}
              />
              <button className="bg-green-500 rounded-lg boton">
                Dona ya!
              </button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #ayudame a salvarla
              </span>
            </div>
          </div>
        </div>
        <div className="tarjetas">
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className="w-full"
              src="https://i.ytimg.com/vi/Zbfn9k6iZFM/maxresdefault.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                Fundacion de animales
              </div>
              <p className="text-base text-gray-700">
                ayudame con mi fundacion de rescate de animales, a que pueda
                seguir llevando mas ayuda y alegría a sus corazones puedes
                ayudar desde $1.
              </p>
              <p>$1,000 US</p>
              <progress
                className="w-56 progress progress-success"
                value={70}
                max={100}
              />
              <button className="bg-green-500 rounded-lg boton">
                Dona ya!
              </button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #Mascotas
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #Rescate
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        id="mas"
        className="bg-gradient-to-r from-[#A2D988]/50 to-[#66994E]/10 rounded-full h-11 w-28 text-[#206A5D]"
      >
        Mas Campaña
      </button>
    </div>
  </main>
  {/* footer */}
  <footer className="p-10 footer space-x-auto max-lg:justify-items-center">
    <aside>
      <img src=".img/foteer.png" alt="" />
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

export default buscar_campañas