import React from 'react'

function Footerbar() {
  return (
    <>
  {/* footer */}
  <footer className="gap-4 px-28 footer max-lg:justify-items-center">
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

export default Footerbar