'use client'
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { Trash2, CheckCircle } from 'lucide-react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";

type ModalCadastroPedidoFormValues = {
  nomeProduto: string;
  precoUnitario: string;
  dataCliente: string;
  emailCliente: string;
  telefoneCliente: string;
  observacao: string;
}

const ModalCadastroPedido = () => {
  const [open, setOpen] = useState(false)

  const schemaValidations = Yup.object().shape({
    cliente: Yup.string().required('Nome do cliente é obrigatório'),
    quantidade: Yup.string().min(1, 'Quantidade deve ser maior que 0').required('Quantidade é obrigatório'),
  });

  const { register, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidations),
  });

  async function onSubmit() {

  }

  return (
    <div>
      <button
        type="button"
        className="flex rounded-md bg-indigo-600 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setOpen(true)}>
        Cadastrar pedido
      </button>


      {/* <!--Modal --> */}
      {open &&
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                <form className="space-y-6" onSubmit={handleSubmit((d) => console.log(d))}>
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 w-full text-center sm:text-left">
                        {/* Modal titulo */}
                        <div className="flex justify-between w-full">
                          <h5 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">Cadastrar pedido</h5>
                        </div>

                        {/* Modal conteudo */}

                        <div className="mt-4">
                          <div className="m-2 mb-0 ml-0 w-full">
                            <label htmlFor="produto" className="sr-only">
                              Produto
                            </label>
                            <select
                              id="produto"
                              name="produto"
                              className='bg-white-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                            >
                              <option>Refrigerante</option>
                              <option>Cerveja</option>
                              <option>Leite</option>
                            </select>
                          </div>
                          <div className="m-2 mb-0 ml-0 w-full">
                            <input
                              {...register('quantidade')}
                              type='number'
                              min={0}
                              name='quantidade'
                              id='input-group-1'
                              maxLength={2}
                              className='bg-white-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                              placeholder='Quantidade'
                            />
                            <ErrorMessage errors={errors} name="quantidade" />
                          </div>
                          <div className="m-2 mb-0 ml-0 w-full">
                            <input
                              {...register('cliente')}
                              type='text'
                              name='cliente'
                              id='input-group-1'
                              maxLength={14}
                              className='bg-white-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                              placeholder='Cliente'
                            />
                            <ErrorMessage errors={errors} name="cliente" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="submit" className="flex rounded-md bg-indigo-600 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar</button>
                    <button type="button" className="flex rounded-md  bg-gray-300 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-200"
                      onClick={() => setOpen(false)}>Cancelar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default ModalCadastroPedido;


