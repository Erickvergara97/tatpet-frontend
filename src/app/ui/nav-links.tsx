// components/NavLinks.js
import Link from "next/link";

function NavLinks() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <a className="text-blue-500 hover:text-blue-800">{link.name}</a>
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
