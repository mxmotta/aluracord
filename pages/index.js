import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import appConfig from '../config.json';
import background from '../assets/images/background.png';
import guest from '../assets/images/guest.png';

export default function PaginaInicial() {
  const [username, setUsername] = useState('');
  const roteamento = useRouter();

  return (
    <>
      <div className="flex items-center justify-center text-center bg-center bg-cover" style={{
        backgroundImage: `url(${background.src})`,
      }}>
        <div className="flex items-center justify-between flex-col bg-black bg-opacity-70 bg-clip-padding backdrop-blur-sm p-10 rounded-xl shadow-lg w-6/7 sm:w-1/3">
          <div className='flex items-center justify-center flex-col w-64 p-4 flex-1'>
            <Image
              className='rounded-full bg-white'
              width={240}
              height={240}
              src={username ? `https://github.com/${username}.png` : guest.src}
            />
            <span
              className='mt-4 bg-gray-800 text-gray-100 py-1 px-3 rounded-full text-sm'
            >
              {username ? username : 'anônimo'}
            </span>
          </div>

          <div
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              roteamento.push('/chat');
            }}
            className='flex items-center justify-center text-center flex-col w-full mb-8'
          >
            <h2 className='text-gray-50 text-2xl'>Boas vindas de volta!</h2>
            <span className='mb-10 text-gray-500'>
              {appConfig.name}
            </span>

            <input
              value={username}
              onChange={function (event) {
                const valor = event.target.value;
                setUsername(valor);
              }}
              className='bg-gray-800 text-gray-100 py-3 px-5 mb-3 rounded-full text-sm w-full active:border-gray-900 outline-none'
            />

            <button
              type='submit'
              className='bg-green-600 hover:bg-green-500 text-gray-100 py-3 px-3 rounded-full font-semibold w-full active:border-gray-900 outline-none'
            >
              Entrar
            </button>
          </div>
          {/* Formulário */}

        </div>
      </div>
    </>
  );
}
