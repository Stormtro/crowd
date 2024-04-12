import React from "react";

function Navbar() {
  return (
    <>
      <>
        {/* navbar */}
        <header className="bg-white">
          <nav className="w-[90%] max-lg:w-screen mx-auto flex justify-between max-lg:flex-wrap items-center ">
            {/* logo */}
            <div className="p-1 max-lg:order-1">
              <a className="w-16 max-lg:m-4" href="index.js">
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
                    href="../page/buscar_campañas.jsx"
                    className=" hover:text-gray-500 text-[#206A5D] "
                  >
                    Buscar Campañas
                  </a>
                </li>
                <li>
                  <a
                    href="../page/sobreNosotos.jsx"
                    className=" hover:text-gray-500 text-[#206A5D] "
                  >
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="../page/miscampañas/misCampañas.jsx"
                    className=" hover:text-gray-500 text-[#206A5D] "
                  >
                    Mis Campañas
                  </a>
                </li>
                <li>
                  <a
                    href="../page/IniciarCampañas.jsx"
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
                <div role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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
      </>
    </>
  );
}

export default Navbar;
