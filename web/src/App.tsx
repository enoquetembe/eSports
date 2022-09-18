import './styles/main.css'
import { useState, useEffect } from 'react'
import logoNLW from './assets/logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/CrateAdModal'
import axios from 'axios'


/*
* Game interface
*/
interface Game{
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {
   
  //Game state
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => 
    {  
      //Request all games from the server APII
      axios('http://localhost:8080/games')
      .then(respose => setGames(respose.data))
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
            //Loop through games and for each game gets de title, banner and ads
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
        <CreateAdModal/> 
     </Dialog.Root>
    </main>
  )
}

export default App
