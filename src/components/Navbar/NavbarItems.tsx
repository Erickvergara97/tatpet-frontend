import Link from 'next/link';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface NavbarItemsProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function NavbarItems({
  isDropdownOpen,
  setIsDropdownOpen,
}: NavbarItemsProps) {
  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[var(--color-soft)] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link
          href="/"
          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Inicio
        </Link>
      </li>
      <li>
        <button
          id="mega-menu-full-dropdown-button"
          data-collapse-toggle="mega-menu-full-dropdown"
          className="flex items-center justify-between w-full py-2 px-3 cursor-pointer text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen ? 'true' : 'false'}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Servicios
          <FaChevronDown className="w-3 h-3 ms-2.5" />
        </button>
      </li>
      <li>
        <Link
          href="/boutique"
          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Boutique
        </Link>
      </li>
      <li>
        <Link
          href="/nosotros"
          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Nosotros
        </Link>
      </li>
      <li>
        <Link
          href="/contacto"
          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Contacto
        </Link>
      </li>
    </ul>
  );
}
