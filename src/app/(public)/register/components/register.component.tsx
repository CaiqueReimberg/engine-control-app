'use client';

import { RegisterUser } from '@/pages/api/auth/authentication';
import { Mail, Key, User } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterComponent() {
  const { register, handleSubmit } = useForm<RegisterFormValues>();
  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    RegisterUser(data).then((response) => {
      toast.success('Usuário cadastrado com sucesso!');
    }).catch((error) => {
      toast.error('Oops. Uma falha ocorreu na aplicação!');
    })
  };

  return (
    <div className='flex flex-col w-96 m-auto bg-zinc-50 rounded-lg shadow py-8'>
      <h2 className='text-zinc-900 m-auto text-3xl mb-8'>
        Cadastro de novo usuário
      </h2>

      {/* Login e Senha */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='text-zinc-800 w-80 m-auto'>
          <div className='mb-6'>
            <label className='mb-8 text-gray-900'>Nome</label>
            <div className='relative mb-6 text-zinc-800'>
              <div className='absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none'>
                <User />
              </div>
              <input
                type='text'
                {...register('name')}
                className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 '
                placeholder='Seu nome completo'
              />
            </div>
          </div>

          <div className='mb-6'>
            <label className='mb-8 text-gray-900'>Email</label>
            <div className='relative mb-6 text-zinc-800'>
              <div className='absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none'>
                <Mail />
              </div>
              <input
                type='email'
                {...register('email')}
                id='input-group-1'
                className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 '
                placeholder='Seu melhor email'
              />
            </div>
          </div>

          <div className='mb-6'>
            <label className='mb-8 text-gray-900'>Senha</label>
            <div className='relative mb-6 text-zinc-800'>
              <div className='absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none'>
                <Key />
              </div>
              <input
                type='password'
                {...register('password')}
                id='input-group-1'
                className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 '
                placeholder='Sua senha'
              />
            </div>
          </div>
        </div>

        <div className='flex items-center justify-around mt-8'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
