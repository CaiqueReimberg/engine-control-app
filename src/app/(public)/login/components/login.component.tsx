'use client';

import { Mail, Key, Chrome } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { Login } from '@/pages/api/auth/authentication';
import { toast } from 'react-toastify';

type LoginFormValues = {
  email: string;
  password: string;
}

export default function LoginComponent() {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  async function onSubmit(data: LoginFormValues) {
    console.log(data);
    Login(data).then((response: any) => {
      toast.success('Bem vindo!');
    }).catch((error: any) => {
      if(error.response.status === 404) {
        toast.error('Login ou senha incorretos');
      } else {
        toast.error('Oops. Erro inesperado no sistema');
      }
    });
  }

  return (
    <div className='flex flex-col w-96 m-auto bg-zinc-50 rounded-lg shadow py-8'>
      <h2 className='text-zinc-900 m-auto text-3xl mb-8'>Login</h2>

      {/* Login e Senha */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='text-zinc-800 w-80 m-auto'>
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
                placeholder='Email de acesso'
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
            Acessar
          </button>

          <a href='#' className='text-blue-500 text-sm font-bold'>
            Esqueceu a Senha?
          </a>
        </div>

        <div className='flex items-center flex-col mt-4'>
          <p className='mb-2'>Ou acesse com</p>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
            onClick={() => signIn('google')}
          >
            <Chrome />
          </button>
        </div>
      </form>
    </div>
  );
}
