'use client'

import { URL_API_QUOTE_QUALITIES } from '@/config/api.config';
import { ApproveQuality } from '@/pages/api/quote';
import { CheckCircle, RotateCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ControleQualidade = async () => {
  const router = useRouter();

  const response = await fetch(URL_API_QUOTE_QUALITIES);
  const qualitiesList = await response.json();

  const approve = (id: string): any => {
    ApproveQuality(id).then((response) => {
      toast.success('Controle aprovado');
      router.refresh();
    }).catch((err: any) => {
      toast.error('Requisição falhou');
    })
  }

  return (
    <div className='w-full px-6 py-2 lg:px-8'>
      <div className='flex justify-between w-full'>
        <h2 className='mt-2 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Controle de Qualidade
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
                        Lote
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Produto
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Cotação por unidade
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Liberar
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Refazer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualitiesList?.map((qualityItem: any) => (
                      <tr className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap px-6 py-4 font-medium'>
                        {qualityItem._id || ''}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          {qualityItem.productName || ''}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          R$ {qualityItem.price || ''}
                        </td>

                        <td className='whitespace-nowrap px-6 py-4'>
                          <button
                            type='button'
                            onClick={() => approve(qualityItem._id)}
                            className='flex rounded-md  bg-green-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-200'
                          >
                            <CheckCircle />
                          </button>
                        </td>

                        <td className='whitespace-nowrap px-6 py-4'>
                          <button
                            type='button'
                            className='flex rounded-md  bg-red-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-200'
                          >
                            <RotateCcw />
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
      <ToastContainer />
    </div>
  );
}

export default ControleQualidade;


