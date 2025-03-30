import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="p-4 bg-[var(--color-soft)] md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl gap-2 text-center flex flex-col">
        {/* TODO: Agregar Logo de tienda */}
        <span className="flex justify-center items-center text-2xl font-semibold text-[var(--color-secondary)]] dark:text-white">
          Tat Pet Boutique & Coffee
        </span>
        <p className="text-gray-500 dark:text-gray-400">
          Un espacio pensado para el bienestar de tus mascotas, con servicios de
          spa, boutique y café.
        </p>
        <ul className="flex flex-wrap gap-5 justify-center items-center text-gray-900 dark:text-white">
          <li>
            <a
              href="https://instagram.com/tatpetboutique"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#c13584] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <span className="[&>svg]:h-4 [&>svg]:w-4">
                <FaInstagram />
              </span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#128c7e] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <span className="[&>svg]:h-4 [&>svg]:w-4">
                <FaWhatsapp />
              </span>
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Carrera 64 # 96 - 179, Barranquilla, Colombia
        </span>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright © 2025{' '}
          <a href="#" className="hover:underline">
            Tatpet Boutique (Terminos y condiciones)
          </a>
          . Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
}
