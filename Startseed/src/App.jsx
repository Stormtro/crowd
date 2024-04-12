import "./App.css";
import Navbar from "./componets/Navbar";
import Footerbar from "./componets/Footerbar";

function App() {
  return (
    <>
      <div className="bg-white">
        <Navbar>
        </Navbar>

        {/* secion quienes somos */}
        <div className="min-h-screen shadow-2xl hero">
          <div className="flex-col p-0 hero-content lg:flex-row">
            {/* imagen hero */}
            <img
              src="img/hero.jpg"
              className="max-w-md rounded-lg max-lg:w-screen "
            />
            <div className="flex flex-col">
              <h1 className="text-center text-[#81B214] text-4xl font-black ">
                QUIENES SOMOS ?
              </h1>
              {/* secion de texto */}
              <section className="mt-6 space-y-8 font-medium text-black">
                <p>
                  Starseed es más que una plataforma de crowdfunding; somos una
                  comunidad impulsada por la pasión y la innovación, con raíces
                  profundas en El Salvador y una visión global. Nacimos con el
                  propósito de empoderar a emprendedores, soñadores y agentes de
                  cambio en nuestra querida tierra, proporcionando una
                  plataforma donde sus ideas brillantes puedan tomar vuelo y
                  alcanzar su máximo potencial.
                </p>
                <p className="max-lg:hidden">
                  En Starseed, creemos en el poder de la colaboración y en el
                  impacto positivo que puede tener cuando nos unimos para hacer
                  realidad nuestros sueños. Desde el corazón de Centroamérica,
                  estamos construyendo puentes hacia un futuro más brillante,
                  donde la creatividad, la innovación y el espíritu empresarial
                  sean celebrados y apoyados.
                </p>
                <p className="max-lg:hidden">
                  Nuestro enfoque va más allá de la recaudación de fondos;
                  estamos comprometidos con el éxito a largo plazo de cada
                  proyecto que respaldamos. Nos esforzamos por brindar el apoyo
                  necesario, ya sea en forma de asesoramiento experto, recursos
                  estratégicos o conexiones valiosas, para ayudar a cada
                  emprendedor a alcanzar sus metas y llevar sus ideas desde la
                  concepción hasta la realización.
                </p>
              </section>
              <button className=" btn-lg bg-gradient-to-r from-[#A2D988]/50 to-[#66994E]/10 self-center mt-4 mb-4 text-secondary text-xl rounded-full font-medium ">
                Campañas
              </button>
            </div>
          </div>
        </div>
        {/* pasos para iniciar una campaña */}
        <div className="py-8 text-center shadow-lg mt-14 ">
          <h1 className="capitalize text-4xl text-[#81B214]">
            Como iniciar una campaña?
          </h1>
          <br />
          <h2 className="capitalize text-[#206A5D] text-2xl">
            siga estos pasos
          </h2>
          <div className="mt-14">
            <div className="mx-16 space-y-8 max-lg:mx-4 max-lg:space-y-16">
              {/* primer paso */}
              <div className="flex justify-center space-x-28 max-lg:space-x-4 max-lg:flex-col max-lg:space-y-8">
                <div className="basis-1/3">
                  <i className="fa-solid fa-user fa-2xl text-[#81B214] align-bottom" />
                </div>
                <div className="basis-2/3">
                  <p className="font-medium text-black line-clamp-7 text-start text-wrap ">
                    Busca el botón "Registrarse" o "Crear cuenta". Por lo
                    general, se encuentra en la esquina superior derecha de la
                    página principal. Haz clic en el botón "Registrarse" y se
                    abrirá un formulario de registro. Completa todos los campos
                    requeridos del formulario, como nombre, dirección de correo
                    electrónico y contraseña. Lee los términos y condiciones, y
                    marca la casilla para aceptarlos si estás de acuerdo. Haz
                    clic en el botón "Enviar" o "Registrarse" para completar el
                    proceso de registro.
                  </p>
                </div>
              </div>
              {/* segundo paso */}
              <div className="flex justify-center space-x-28 max-lg:space-x-4 max-lg:flex-col max-lg:space-y-8">
                <div className="basis-1/3">
                  <i className="fa-solid fa-comments fa-2xl text-[#81B214] align-bottom" />
                </div>
                <div className="basis-2/3">
                  <p className="font-medium text-black line-clamp-7 text-start ">
                    Explora las causas: Navega por las diferentes categorías de
                    causas que apoyamos, desde ayuda humanitaria hasta
                    conservación del medio ambiente. Encuentra una causa que te
                    apasione y descubre las organizaciones que están trabajando
                    en ella.
                    <br />
                    Sé parte de nuestra comunidad en línea: Únete a nuestros
                    grupos en redes sociales y participa en las conversaciones.
                    Comparte tus experiencias, ideas y preguntas con otros
                    donantes y miembros de la comunidad.
                  </p>
                </div>
              </div>
              {/* tercero paso */}
              <div className="flex justify-center space-x-28 max-lg:space-x-4 max-lg:flex-col max-lg:space-y-8">
                <div className="basis-1/3">
                  <i className="fa-solid fa-hand-holding-dollar fa-2xl text-[#81B214] align-bottom" />
                </div>
                <div className="basis-2/3">
                  <p className="font-medium text-black line-clamp-7 text-start ">
                    para promover tu proyecto y aceptar donaciones en línea.
                    Asegúrate de incluir información detallada sobre tu causa,
                    el impacto que esperas lograr y cómo se utilizarán los
                    fondos donados.
                  </p>
                </div>
              </div>
              {/* cuarto paso */}
              <div className="flex justify-center space-x-28 max-lg:space-x-4 max-lg:flex-col max-lg:space-y-8">
                <div className="basis-1/3">
                  <i className="fa-solid fa-heart fa-2xl text-[#81B214] align-bottom" />
                </div>
                <div className="basis-2/3">
                  <p className="font-medium text-black line-clamp-7 text-start ">
                    Ayuda a aumentar la visibilidad de los proyectos
                    compartiéndolos en tus redes sociales y entre tus contactos.
                    Cuantas más personas conozcan un proyecto, mayores serán las
                    posibilidades de que se alcance la meta de financiamiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Descubre campañas que te pueden interesar */}
        <div className="mt-8 shadow">
          <h1 className="text-3xl font-medium text-center text-secondary ">
            Descubre campañas que te pueden interesar
          </h1>
          <button className="bg-gradient-to-r from-[#A2D988]/50 to-[#66994E]/10 rounded-full h-11 w-28 flex justify-center items-center ml-36 my-6 max-lg:mx-auto text-[#206A5D] font-medium  ">
            Campañas
          </button>
          <div className="flex justify-center space-x-4 max-lg:flex-col max-lg:w-screen max-lg:space-x-0 max-lg:space-y-4 mb-28">
            {/* proyecto destacado 1 */}
            <div className="card w-96 max-lg:w-screen bg-[#CFD8D7] shadow-xl">
              <figure>
                <img src="img/hero.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Proyec!</h2>
                <div className="badge badge-secondary">Popular</div>
                <progress
                  className="w-56 progress progress-success"
                  value={70}
                  max={100}
                />
                <p>
                  Ayudanos a crear una pagina
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam voluptates nulla, hic blanditiis vel aperiam provident
                  quod illo dolore rem debitis explicabo, recusandae, sint
                  perferendis mollitia possimus aut quasi repudiandae.
                </p>
                <div className="justify-end card-actions">
                  <div className="badge badge-outline">Tecnologia</div>
                  <div className="badge badge-outline">Web</div>
                </div>
              </div>
            </div>
            {/* proyecto destacado 2 */}
            <div className="card w-96 max-lg:w-screen bg-[#CFD8D7] shadow-xl">
              <figure>
                <img src="img/hero.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">EXAMPLE!</h2>
                <div className="badge badge-secondary">Popular</div>
                <progress
                  className="w-56 progress progress-success"
                  value={70}
                  max={100}
                />
                <p>
                  Ayudanos a crear una pagina
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam voluptates nulla, hic blanditiis vel aperiam provident
                  quod illo dolore rem debitis explicabo, recusandae, sint
                  perferendis mollitia possimus aut quasi repudiandae.
                </p>
                <div className="justify-end card-actions">
                  <div className="badge badge-outline">Tecnologia</div>
                  <div className="badge badge-outline">Web</div>
                </div>
              </div>
            </div>
            {/* proyecto destacado 3 */}
            <div className="card w-96 max-lg:w-screen bg-[#CFD8D7] shadow-xl">
              <figure>
                <img src="img/hero.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">I can sleep!</h2>
                <div className="badge badge-secondary">Popular</div>
                <progress
                  className="w-56 progress progress-success"
                  value={70}
                  max={100}
                />
                <p>
                  Ayudanos a crear una pagina
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam voluptates nulla, hic blanditiis vel aperiam provident
                  quod illo dolore rem debitis explicabo, recusandae, sint
                  perferendis mollitia possimus aut quasi repudiandae.
                </p>
                <div className="justify-end card-actions">
                  <div className="badge badge-outline">Tecnologia</div>
                  <div className="badge badge-outline">Web</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footerbar></Footerbar>
      </div>
    </>
  );
}

export default App;
