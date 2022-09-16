import './styles/main.css'
import {MagnifyingGlassPlus} from 'phosphor-react'
import logoNLW from './assets/logo.svg'

function App() {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col items-center p-20'>
      <img src={logoNLW}></img>

      <h1 className='text-6xl text-white font-black mt-20'>
        Your <span className='bg-nlwGradient bg-clip-text text-transparent'>duo</span> is here.
      </h1>

      <div className='grid grid-cols-6 gap-4 mt-16'>
          <a href="" className='relative rounded-lg overflow-hidden'>
           <img src='game1.png'></img>

           <div className='w-full bg-gameGradient pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm'> 4 ads </span>
           </div>
          </a>

          <a href="" className='relative rounded-lg overflow-hidden'>
           <img src='game2.png'></img>

           <div className='w-full bg-gameGradient pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>Dota 2</strong>
              <span className='text-zinc-300 text-sm'> 4 ads </span>
           </div>
          </a>

          <a href="" className='relative rounded-lg overflow-hidden'>
           <img src='game3.png'></img>

           <div className='w-full bg-gameGradient pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>Counter Strike</strong>
              <span className='text-zinc-300 text-sm'> 4 ads </span>
           </div>
          </a>

          <a href="" className='relative rounded-lg overflow-hidden'>
           <img src='game4.png'></img>

           <div className='w-full bg-gameGradient pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>Apex Legends</strong>
              <span className='text-zinc-300 text-sm'> 4 ads </span>
           </div>
          </a>

          <a href="" className='relative rounded-lg overflow-hidden'>
           <img src='game5.png'></img>

           <div className='w-full bg-gameGradient pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>Fortnite</strong>
              <span className='text-zinc-300 text-sm'> 4 ads </span>
           </div>
          </a>

          <a href="" className='relative rounded-lg overflow-hidden'>
           <img src='game6.png'></img>

           <div className='w-full bg-gameGradient pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>World Warcraft</strong>
              <span className='text-zinc-300 text-sm'> 4 ads </span>
           </div>
          </a>

      </div>

      <div className='mt-8 self-stretch rounded-lg pt-1 bg-nlwGradient overflow-hidden w-[95%] mx-auto'>
       <div className='bg-[#2A2634] px-8 py-6 flex justify-between'>
          <div>
            <strong className='text-2xl text-white block'>
              You didn't find your  duo?
            </strong>
            <span className='text-zinc-400'>
              Post an ad to find new players!
            </span>
          </div>

          <button className='px-4 py-3 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3' >
            <MagnifyingGlassPlus size={24}/>Post ad
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
