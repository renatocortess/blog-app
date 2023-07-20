"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
             

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex space-x-4">
                <Link href="/" passHref>
                  <span className="text-2xl  leading-9 tracking-tight  hover:bg-green-600 rounded-md px-3 py-2   font-medium text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
                   Sobre
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="text-2xl  leading-9 tracking-tight  hover:bg-green-600 rounded-md px-3 py-2   font-medium text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
                    Serviços
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="text-2xl  leading-9 tracking-tight  hover:bg-green-600 rounded-md px-3 py-2   font-medium text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
                    Contato
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden ">
            <div className="px-2   pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/about" passHref>
                <p className="text-1xl  leading-9 tracking-tight  hover:bg-green-600 rounded-md px-3 py-2   font-medium text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
                  Sobre
                </p>
              </Link>
              <Link href="/services" passHref>
                <p className="text-1xl  leading-9 tracking-tight  hover:bg-green-600 rounded-md px-3 py-2   font-medium text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
                  Serviços
                </p>
              </Link>
              <Link href="/contact" passHref>
                <p className="text-1xl  leading-9 tracking-tight  hover:bg-green-600 rounded-md px-3 py-2   font-medium text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
                  Contato
                </p>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}