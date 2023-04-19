'use client';

import { Mail, Key } from 'lucide-react';

export default function LoginComponent() {
  async function handleSubmit(e: any) {
    const x = new FormData(e)
    console.log(e);
  }

  return (
    <div className="flex flex-col w-96 m-auto bg-zinc-50 rounded-lg shadow py-8">
      <h2 className="text-zinc-900 m-auto text-3xl mb-8">Login</h2>

      {/* Login e Senha */}

      <form onSubmit={handleSubmit}>
        <div className="text-zinc-800 w-80 m-auto">
          <div className="mb-6">
            <label className="mb-8 text-gray-900">Email</label>
            <div className="relative mb-6 text-zinc-800">
              <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                <Mail />
              </div>
              <input type="email" id="input-group-1" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="name@flowbite.com" />
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-8 text-gray-900">Senha</label>
            <div className="relative mb-6 text-zinc-800">
              <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                <Key />
              </div>
              <input type="password" id="input-group-1" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="name@flowbite.com" />
            </div>
          </div>
        </div>

        <div className='flex items-center justify-around mt-8'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Acessar
          </button>

          <a href='#' className='text-blue-500 text-sm font-bold'>Esqueceu a Senha?</a>
        </div>
      </form>
    </div>
  )
}
