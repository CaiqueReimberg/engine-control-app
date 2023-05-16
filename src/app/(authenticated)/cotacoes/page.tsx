'use client';

import { URL_API_QUOTE_QUOTES } from '@/config/api.config';
import { ApproveQuote, GetQuotes } from '@/pages/api/quote';
import { Check, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const CotacoesList = async () => {
  const router = useRouter();
  const response = await fetch(URL_API_QUOTE_QUOTES);
  const quotes = await response.json();

  const approve = (id: string): any => {
    ApproveQuote(id).then((response) => {
      toast.success('Cotação aprovada');
      router.refresh();
    }).catch((err: any) => {
      toast.error('Requisição falhou');
    })
  }

  return (
    <div className='w-full px-6 py-2 lg:px-8'>
      <div className='flex justify-between w-full'>
        <h2 className='mt-2 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Cotações
        </h2>

        <button
          type='button'
          className='flex rounded-md bg-indigo-600 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          <Link href='/cadastro/cotacao'>
            Cadastrar cotação
          </Link>
        </button>
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
                        Produto
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Fornecedor
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Preço
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Validade
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Aprovar
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
                    {quotes.map((item: any) => (
                      <tr className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap px-6 py-4 font-medium'>
                          {item._id || ''}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          {item.productName || ''}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          {item.supplier || ''}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          R$ {item.price || ''}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          {item.dueDate || ''}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          <button
                            type='button'
                            onClick={ () => approve(item._id)}
                            className='flex rounded-md  bg-green-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-200'
                          >
                            <Check />
                          </button>
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

export default CotacoesList;
