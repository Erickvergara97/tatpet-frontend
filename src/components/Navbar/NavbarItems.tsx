import NavLinkButton from './NavLinkButton';
import NavDropdown from './NavDropdown';

interface NavbarItemsProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface NavbarItem {
  label: string;
  href?: string;
  dropdown?: boolean;
}

export default function NavbarItems({
  isDropdownOpen,
  setIsDropdownOpen,
}: NavbarItemsProps) {
  const navbarItems: NavbarItem[] = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', dropdown: true },
    { label: 'Boutique', href: '/boutique' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[var(--color-soft)] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {navbarItems.map((item, index) => (
        <li key={index} className="relative">
          {item.dropdown ? (
            <NavDropdown
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
            />
          ) : (
            <NavLinkButton itemProps={item} />
          )}
        </li>
      ))}
    </ul>
  );
}
