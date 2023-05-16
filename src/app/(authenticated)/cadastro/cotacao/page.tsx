'use client'
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { RegisterQuote } from "@/pages/api/quote";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

type CadastroCotacaoFormValues = {
  productName: String;
  supplier: String;
  price: Number;
  dueDate: Date;
  observation: String;
}

const CadastroCotacao = () => {
  const router = useRouter();

  const schemaValidations = Yup.object().shape({
    productName: Yup.string().required('Nome do cliente é obrigatório'),
    supplier: Yup.string().required('Nome do fornecedor é obrigatório'),
    price: Yup.string().required('Preço do produto é obrigatório'),
    dueDate: Yup.string().required('Validade da cotação é obrigatório'),
  });

  const { register, handleSubmit, formState: { errors },
  } = useForm<CadastroCotacaoFormValues>({
    resolver: yupResolver(schemaValidations),
  });

  async function onSubmit(data: CadastroCotacaoFormValues) {
    console.log('data', data);
    RegisterQuote(data).then((response) => {
      toast.success('Cotação registrada com sucesso');
      router.push('/cotacoes');
    }).catch((err) => {
      toast.error('Falha ao cadastrar', err.message);
    })
  }

  return (
    <div className='min-h-full px-6 py-2 lg:px-8'>
      <div className='sm:w-full sm:max-w-sm'>
        <h2 className='mt-2 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Cadastro de cotações
        </h2>
      </div>

      <div className='mt-2 sm:w-full'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex'>
            <div className='m-2 mb-0 ml-0 w-full'>
              <input
                type='text'
                {...register('productName')}
                name='productName'
                maxLength={50}
                id='input-group-1'
                className='bg-white-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Nome do produto'
              />
              <ErrorMessage errors={errors} name='productName' />
            </div>

            <div className='m-2 mb-0 mr-0 w-full'>
              <input
                type='text'
                {...register('supplier')}
                name='supplier'
                maxLength={50}
                id='input-group-1'
                className='bg-white-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Nome do fornecedor'
              />
              <ErrorMessage errors={errors} name='supplier' />
            </div>
          </div>

          <div className='flex'>
            <div className='m-2 mb-0 ml-0 w-full'>
              <input
                type='text'
                {...register('price')}
                name='price'
                id='input-group-1'
                maxLength={14}
                className='bg-white-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Preço unidade'
              />
              <ErrorMessage errors={errors} name='price' />
            </div>

            <div className='m-2 mb-0 mr-0 w-full'>
              <input
                type='text'
                {...register('dueDate')}
                name='dueDate'
                maxLength={10}
                id='input-group-1'
                className='bg-white-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Validade da cotação'
              />
              <ErrorMessage errors={errors} name='dueDate' />
            </div>
          </div>

          <div>
            <div className='m-2 mb-0 ml-0 w-full'>
              <input
                type='text'
                {...register('observation')}
                name='observation'
                id='input-group-1'
                maxLength={14}
                className='bg-white-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Observação'
              />
            </div>
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className='flex rounded-md bg-indigo-600 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Cadastrar
            </button>
            <button
              type='button'
              onClick={() => router.back()}
              className='flex rounded-md  bg-gray-300 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-200'
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CadastroCotacao;