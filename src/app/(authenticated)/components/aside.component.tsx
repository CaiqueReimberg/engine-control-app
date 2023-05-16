'use client';

import { useState } from 'react';
import { ArrowDown, ChevronDown, ChevronUp, Coins, Contact, PackageSearchIcon, User } from 'lucide-react';
import Link from 'next/link';

const Aside = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start'>
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                type='button'
                className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              >
                <span className='sr-only'>Open sidebar</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                    d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                  ></path>
                </svg>
              </button>
              <Link href='#' className='flex ml-2 md:mr-24'>
                <img
                  src='https://flowbite.com/docs/images/logo.svg'
                  className='h-8 mr-3'
                  alt='FlowBite Logo'
                />
                <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
                  Engine Control
                </span>
              </Link>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center ml-3'>
                <div className='text-white flex'>
                  <span>Ola</span>
                  <button
                    type='button'
                    className='pl-2 hover:text-gray-400'
                  >
                    <span>Fulano</span>
                  </button>

                  <button
                    type='button'
                    className='px-2 ml-2 hover:bg-gray-700'
                  >
                    <span>Sair</span>
                  </button>
                </div>
                <div
                  className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600'
                  id='dropdown-user'
                >
                  <div className='px-4 py-3' role='none'>
                    <p
                      className='text-sm text-gray-900 dark:text-white'
                      role='none'
                    >
                      Neil Sims
                    </p>
                    <p
                      className='text-sm font-medium text-gray-900 truncate dark:text-gray-300'
                      role='none'
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className='py-1' role='none'>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className='fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 pb-4 overflow-y-auto bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            <li>
              <Link
                href='/clientes'
                className='flex items-center p-2  rounded-lg text-white hover:bg-gray-700'
              >
                <Contact />
                <span className='ml-3'>Clientes</span>
              </Link>
            </li>
            <li>
              <Link
                href='/cotacoes'
                className='flex items-center p-2  rounded-lg text-white hover:bg-gray-700'
              >
                <Coins />
                <span className='ml-3'>Cotações</span>
              </Link>
            </li>
            <li>
              <button
                type='button'
                className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                onClick={() => setShowSubmenu(!showSubmenu)}
              >
                <PackageSearchIcon />
                <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                  Controle
                </span>
                {
                  showSubmenu
                  ? <ChevronUp />
                  : <ChevronDown />
                }
              </button>
              <ul id='dropdown-example' className={`${showSubmenu ? 'visible': 'hidden'} py-2 space-y-2`}>
                <li>
                  <Link
                    href='controle/producao'
                    className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Produção
                  </Link>
                </li>
                <li>
                  <Link
                    href='controle/qualidade'
                    className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Qualidade
                  </Link>
                </li>
                <li>
                  <Link
                    href='controle/pedidos'
                    className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Liberação Produto
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href='/usuarios'
                className='flex items-center p-2  rounded-lg text-white hover:bg-gray-700'
              >
                <User />
                <span className='ml-3'>Usuários</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Aside;
