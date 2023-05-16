'use client'
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type CadastroClienteFormValues = {
  nomeCliente: string;
  cpfCliente: string;
  dataCliente: string;
  emailCliente: string;
  telefoneCliente: string;
  observacao: string;
}

const CadastroCliente = () => {
  const schemaValidations = Yup.object().shape({
    nomeCliente: Yup.string().required('Nome do cliente é obrigatório'),
    cpfCliente: Yup.string().required('CPF do cliente é obrigatório'),
    emailCliente: Yup.string().email('Formato inválido!').required('Email do cliente é obrigatório'),
  });

  const { register, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidations),
  });

  async function onSubmit() {

  }

  return (
    <div className="min-h-full px-6 py-2 lg:px-8">
      <div className="sm:w-full sm:max-w-sm">
        <h2 className="mt-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">Cadastro de cliente</h2>
      </div>

      <div className="mt-2 sm:w-full">
        <form className="space-y-6" onSubmit={handleSubmit((d) => console.log(d))}>
          <div className="flex">
            <div className="m-2 mb-0 ml-0 w-full">
              <input
                type='text'
                {...register('nomeCliente')}
                name='nomeCliente'
                maxLength={50}
                id='input-group-1'
                className='bg-white-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Nome do cliente'
              />
              <ErrorMessage errors={errors} name="nomeCliente" />
            </div>

            <div className="m-2 mb-0 mr-0 w-full">
              <input
                type='text'
                {...register('cpfCliente')}
                name='cpfCliente'
                id='input-group-1'
                maxLength={14}
                className='bg-white-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='CPF do cliente'
              />
              <ErrorMessage errors={errors} name="cpfCliente" />
            </div>
          </div>

          <div className="flex">
            <div className="m-2 mb-0 ml-0 w-full">
              <input
                type='text'
                name='dataCliente'
                maxLength={10}
                id='input-group-1'
                className='bg-white-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Data de Nasc.'
              />
            </div>

            <div className="m-2 mb-0 mr-0 w-full">
              <input
                type='text'
                {...register('emailCliente')}
                name='emailCliente'
                id='input-group-1'
                className='bg-white-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Email'
              />
              <ErrorMessage errors={errors} name="emailCliente" />
            </div>

            <div className="m-2 mb-0 mr-0 w-full">
              <input
                type='text'
                name='telefoneCliente'
                id='input-group-1'
                maxLength={14}
                className='bg-white-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Telefone'
              />
            </div>
          </div>

          <div>
            <div className="m-2 mb-0 ml-0 w-full">
              <input
                type='text'
                name='observacao'
                id='input-group-1'
                maxLength={14}
                className='bg-white-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Observação'
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="flex rounded-md bg-indigo-600 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar</button>
            <button type="button" className="flex rounded-md  bg-gray-300 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-200">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroCliente;