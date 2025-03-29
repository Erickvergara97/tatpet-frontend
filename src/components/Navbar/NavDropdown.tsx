import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface NavDropdownProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavDropdown({
  isDropdownOpen,
  setIsDropdownOpen,
}: NavDropdownProps) {
  return (
    <button
      id="mega-menu-full-dropdown-button"
      data-collapse-toggle="mega-menu-full-dropdown"
      className="flex items-center justify-between w-full py-2 px-3 cursor-pointer text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[var(--color-secondary)] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
      aria-haspopup="true"
      aria-expanded={isDropdownOpen ? 'true' : 'false'}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      Servicios
      <FaChevronDown className="w-3 h-3 ms-2.5" />
    </button>
  );
}
