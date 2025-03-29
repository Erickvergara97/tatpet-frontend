import Link from 'next/link';
import React from 'react';

interface NavLinkButtonProps {
  itemProps: { label: string; href?: string };
}

export default function NavLinkButton({ itemProps }: NavLinkButtonProps) {
  const { label, href } = itemProps;
  return (
    <Link
      href={href || '/'}
      className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[var(--color-secondary)] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
    >
      {label}
    </Link>
  );
}
