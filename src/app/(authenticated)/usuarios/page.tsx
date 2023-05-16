'use client';

import { URL_API_AUTH_USERS } from '@/config/api.config';
import { GetUsers } from '@/pages/api/auth/authentication';
import { Edit, Trash2 } from 'lucide-react';

const UsuariosList = async () => {

  const response = await fetch(URL_API_AUTH_USERS);
  const users = await response.json();

  // const grabUsers = () => {
  //   GetUsers().then((response: any) => {
  //     console.log(response.data);
  //   }).catch((err: any) => {
  //     console.log(err);
  //   })
  // }
  const x = ['Lote', 'Produto', 'Cotação', 'Liberar', 'Refazer'];

  return (
    <div className='w-full px-6 py-2 lg:px-8'>
      <div className='flex justify-between w-full'>
        <h2 className='mt-2 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Usuários
        </h2>
      </div>

      <div className='mt-2 w-full'>
        <div className='flex flex-col'>
          <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
              <div className='overflow-hidden'>
                <table className='min-w-full text-left text-sm font-light'>
                  <thead className='border-b font-medium dark:border-neutral-500'>
                    <tr>
                      <th scope='col' className='px-6 py-4'>
                        Identificador
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Cliente
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        email
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Telefone
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Editar
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Excluir
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item: any) => (
                      <tr className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap px-6 py-4 font-medium'>
                          {item._id || ''}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          {item.name || ''}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          {item.email || ''}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          {item.tel || ''}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          <button
                            type='button'
                            className='flex rounded-md  bg-green-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-200'
                          >
                            <Edit />
                          </button>
                        </td>

                        <td className='whitespace-nowrap px-6 py-4'>
                          <button
                            type='button'
                            className='flex rounded-md  bg-red-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-200'
                            onClick={() => console.log('oi')}
                          >
                            <Trash2 />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuariosList;
