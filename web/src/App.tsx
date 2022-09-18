import './styles/main.css'
import { useState, useEffect } from 'react'
import logoNLW from './assets/logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import { Input } from './components/Form/Input'

interface Game{
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => 
    {
      fetch('http://localhost:8080/games')
      .then(response => response.json())
      .then(data => setGames(data))
    },

    []
  )
  
  return (
    <main className='max-w-[1440px] mx-auto flex flex-col items-center p-20'>
      
      <img src={logoNLW}></img>

      <h1 className='text-6xl text-white font-black mt-20'>
        Your <span className='bg-nlwGradient bg-clip-text text-transparent'>duo</span> is here.
      </h1>

      <section className='grid grid-cols-6 gap-4 mt-16'>
 
          {games.map(game => {
            return (
              <GameBanner
                key={game.id}
                title= {game.title} 
                bannerUrl= {game.bannerUrl}
                countAds = {game._count.ads}
              />             
            )
          } )}        
                      
      </section>

     <Dialog.Root>
        <CreateAdBanner/>

        <Dialog.Portal>
           <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'>
              <Dialog.Title className='text-3xl font-black '> Post an ad </Dialog.Title>

                 <form className='mt-8 flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="game" className='font-semibold'>Wich game? </label>
                    <Input id='game'   placeholder='Select the game you want to play' />
                  </div>

                  <div  className='flex flex-col gap-2'>
                      <label htmlFor="name">Your nickname</label>
                      <Input id='name' type="text" placeholder='what is your nickname in the game?' />
                  </div>

                  <div className='grid grid-cols-2 gap-6'>
                      <div className='flex flex-col gap-2' >
                          <label htmlFor="yearsPlaying"> Years playing</label>

                          <Input id='yearsPlaying' type="number" placeholder='Is ok being 0' />
                      </div>

                      <div className='flex flex-col gap-2'>
                          <label htmlFor="discord ">Your discord</label>
                          <Input id='discord' type="text" placeholder='user#0000' />
                      </div>
                  </div>


                  <div className='flex gap-6'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="weekDays">When do you usually play? </label>
                      <div className='grid grid-cols-4 gap-2' >
                        <button className='w-8 h-8 rounded bg-zinc-900 ' title='Sunday'>S</button>
                        <button className='w-8 h-8 rounded bg-zinc-900 ' title='Monday'>M</button>
                        <button className='w-8 h-8 rounded bg-zinc-900 ' title='Tuesday'>T</button>
                        <button className='w-8 h-8 rounded bg-zinc-900 ' title='Wednesday'>W</button>
                        <button className='w-8 h-8 rounded bg-zinc-900 ' title='Thursday'>T</button>
                        <button className='w-8 h-8 rounded bg-zinc-900 ' title='Fiday'>F</button>
                        <button className='w-8 h-8 rounded bg-zinc-900 ' title=''>S</button> 
                      </div>
                      
                    </div>

                    <div className='flex flex-col gap-2 flex-1'>
                       <label htmlFor="hourStart">What time do you usually play </label>
                        
                       <div className='grid grid-cols-2 gap-2'>
                          <Input id='hourStart' type="time" placeholder='from' />

                          <Input id='hourEnd' type="time" placeholder='to' />
                      </div>

                    </div>
                  </div>

                    <div className='mt-2 flex gap-2 text-sm'>
                      <Input type="checkbox" />
                      I use voice channel
                    </div>  

                    <footer className='mt-4 flex justify-end gap-4'>
                      <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancel</Dialog.Close>
                      <button type='submit' className='bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600 flex items-center gap-4'>
                        <GameController className='w-6 h-6'/> 
                        Find duo
                      </button>
                    </footer>
                 </form>
            </Dialog.Content>        
        </Dialog.Portal>
     </Dialog.Root>
    </main>
  )
}

export default App
