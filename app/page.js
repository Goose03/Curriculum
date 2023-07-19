"use client"

import github from '../public/pfp.jpeg';
import me from '../public/me.jpeg';
import blob1 from '../public/blob1.svg';

import React, {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Home() {
  
  const copyToClipboard = () => {
    alert(`Copied to Clipboard`);
}
  
  return (
    <main className="min-h-screen items-center justify-between bg-gradient-to-r from-zeus-400 to-zeus-200">
      
      <div className="navbar bg-zeus-900">
        <div className="flex-1">
          <p className="px-5 normal-case text-xl text-zeus-50">Mi CV Virtual</p>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <li><a className="text-zeus-50" href="https://github.com/Goose03">Github</a></li>
            
            <li>
            <div className="avatar">
              <div className="w-9 rounded-full">
                <a href="https://github.com/Goose03"><img src="./pfp.jpeg"/></a>
              </div>
            </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 py-10 opacity-80'>

        <div className="py-10 bg-gradient-to-r from-zeus-600 to-zeus-500 rounded-r-lg">
          <figure class="relative w-36 h-36 mx-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <img class="rounded-full mx-auto" src="/me.jpeg"></img>
          </figure>

          <div className='pt-3 text-2xl text-center text-zeus-50'>Gustavo Garcia Tellez</div>


          <div className='divider w-2/3 mx-auto'></div>


          <div className='pt-3 pb-3 text-xl underline text-center text-zeus-50'>Contactos</div>
          <div className='flex flex-col place-items-center'>
            <div className='py-3'>
              <CopyToClipboard text="gusgt03@gmail.com">
                <button className="btn btn-active btn-ghost" onClick={copyToClipboard}>gusgt03@gmail.com</button>
              </CopyToClipboard>
            </div>

            <div className='py-3 '>
              <CopyToClipboard text="442-287-4848">
                <button className=" btn btn-active btn-ghost" onClick={copyToClipboard}>442-287-4848</button>
              </CopyToClipboard>
            </div>
          </div>


          <div className='divider w-2/3 mx-auto '></div>


          <div className='pt-3 text-xl underline text-center text-zeus-50'>Perfil Profesional</div>
          <p className='px-6 py-3 text-justify text-zeus-50'> 
            Estudiante del Tecnológico de Monterrey de Ingenieria en Tecnologías Computacionales, en busca de crecimiento profesional
            y con ansias de aprender. Interesado en desarrollo web y ciber-seguridad. Dedicado a desarrollar un ambiente igualitario y seguro
            para todos.
          </p>

        </div>


        <div className="pt-10 mx-6 flex flex-col place-items-center gap-5">
          <div className='bg-gradient-to-r from-zeus-600 to-zeus-500 rounded-lg w-full'>
            <div className='pt-3 pb-2 text-xl underline text-center text-zeus-50 font-semibold'>Experiencia Laboral</div>
            <p className='px-6 pb-1 text-center text-zeus-50 underline decoration-double'>Junior Sales Associate, Rexair Mexico</p>
            <p className='text-sm text-center text-zeus-50 italic'>Jun 2021 - Jul 2021</p>
            <ul className='py-3 px-3 text-justify text-sm list-disc list-inside leading-relaxed'>
              <li>Venta de productos de limpieza de gamma alta</li>
              <li>Demostraciones a clientes, en las cuales se demostraba funciones y utilidad del producto a vender</li>
              <li>Reclutacion de empleados para ampliar la fuerza de trabajo</li>
              <li>Recoleccion de referidos de los clientes que recomendaban mi trabajo</li>
            </ul>
          </div>

          <div className='bg-gradient-to-r from-zeus-600 to-zeus-500 rounded-lg w-full'>
            <div className='pt-3 pb-2 text-xl underline text-center text-zeus-50 font-semibold'>Formación</div>

            <p className='px-6 pb-1 text-center text-zeus-50 underline'>Tecnológico de Monterrey, Campus Guadalajara</p>
            <ul className='list-inside text-center text-zeus-50'>
              <li className='list-disc italic font-light'>Ingeneria en Tecnologias Computacionales</li>
              <li className='font-light text-xs'>Tercer semestre</li>
            </ul>

            <p className='px-6 pb-1 text-center text-zeus-50 underline'>John F. Kennedy The American School of Queretaro</p>
            <ul className='pb-3 list-inside list-disc text-center text-zeus-50'>
              <li className='font-light'>Diploma de preparatoria SEP</li>
              <li className='font-light'>Diploma de preparatoria Americana</li>
            </ul>
          </div>

          <div className='bg-gradient-to-r from-zeus-600 to-zeus-500 rounded-lg w-full'>
            <div className='pt-3 pb-2 text-xl underline text-center text-zeus-50 font-semibold'>Idiomas</div>

            <div className='px-6 grid grid-cols-3'>
              <p className='col-start-1 col-end-1'>Español</p>
              <p className='col-start-3 col-end-3 text-end'>Nativo</p>

              <p className='col-start-1 col-end-1'>Ingles</p>
              <p className='col-start-3 col-end-3 text-end pb-3'>C2</p>
            </div>
          </div>
        </div>


        <div className="pt-10 mx-6 flex flex-col place-items-center gap-5">
          <div className='bg-gradient-to-r from-zeus-600 to-zeus-500 rounded-lg w-full'>
            <div className='pt-3 pb-2 text-xl underline text-center text-zeus-50 font-semibold'>Competencias</div>

            <div className='px-6 grid grid-cols-4'>
              <div className='col-start-1 col-span-2'><p>Desarrollo en React, Tailwind CSS</p></div>
              <p className='col-start-4 text-end'>Competente</p>
            </div>

            <div className='divider w-2/3 mx-auto'></div>

            <div className='px-6 grid grid-cols-4'>
              <div className='col-start-1 col-span-2'><p>Desarrollo en C++</p></div>
              <p className='col-start-4 text-end'>Competente</p>
            </div>

            <div className='divider w-2/3 mx-auto'></div>

            <div className='px-6 grid grid-cols-4'>
              <div className='col-start-1 col-span-2'><p>Desarrollo en Python</p></div>
              <p className='col-start-4 text-end'>Principiante</p>
            </div>

            <div className='divider w-2/3 mx-auto'></div>

            <div className='px-6 grid grid-cols-4'>
              <div className='col-start-1 col-span-2'><p>Desarrollo en JS</p></div>
              <p className='col-start-4 text-end'>Principiante</p>
            </div>

            <div className='divider w-2/3 mx-auto'></div>

            <div className='px-6 grid grid-cols-4'>
              <div className='col-start-1 col-span-2'><p>Uso de Github</p></div>
              <p className='col-start-4 text-end'>Competente</p>
            </div>

            <div className='divider w-2/3 mx-auto'></div>

            <div className='px-6 grid grid-cols-4 pb-3'>
              <div className='col-start-1 col-span-2'><p>Colaboracion en Equipo </p></div>
              <p className='col-start-4 text-end'>Competente</p>
            </div>
          </div>


          <div className='bg-gradient-to-r from-zeus-600 to-zeus-500 rounded-lg w-full'>
            <div className='pt-3 pb-2 text-xl underline text-center text-zeus-50 font-semibold'>Experiencia no Laboral</div>
              <p className='px-6 pb-1 text-center text-zeus-50 underline decoration-double'>Hackathon Solana, Super Team Mx</p>
              <p className='text-sm text-center text-zeus-50 italic'>Jun 2023 - Jun 2023</p>
              <ul className='py-3 px-3 text-justify text-sm list-disc list-inside leading-relaxed'>
                <li>Hackathon a nivel nacional centrado en desarrollo de web 3</li>
                <li>Desarrollo front-end y UI</li>
              </ul>
          </div>

        </div>
      </div>

      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </main>
  )
}
