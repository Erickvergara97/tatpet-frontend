import Link from 'next/link';
import React from 'react';

export default function CompanyDropdown() {
  return (
    <div
      id="mega-menu-full-dropdown"
      className="mt-1 border-gray-200 shadow-xs bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
    >
      <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
        <ul>
          <li>
            <Link
              href="/servicios/grooming"
              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Grooming</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/servicios/hotel"
              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Hotel</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href="/servicios/pasadia"
              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Pasadia</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/servicios/spa"
              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Spa</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
