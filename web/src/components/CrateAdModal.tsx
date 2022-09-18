 /**Impots */
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from 'phosphor-react'
import { Input } from './Form/Input'
import { useEffect, useState, FormEvent } from 'react'
import axios from 'axios';


/*
* Game interface 
*/
interface Game{
    id: string,
    title: string,
}


export const CreateAdModal = () => {
     
    /*
    * States for games, weekDays and voice channel 
    */
    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState <boolean>(false)

    useEffect(() => 
        /*
        *Request games from the server API
         */
        {
            axios('http://localhost:8080/games')
            .then(response => setGames(response.data))
        },

        []
    )

    /*
    * Function to handle the form to post ads 
    *@params - event to handle de fom event 
    */
    const  handleCreateAd = async (event: FormEvent) => {
        event.preventDefault()

        /*
        *Getting the form data
        */
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        
        if(!data.name) {
            return
        }
        
     try {
        /*
        * Request to the server API to cread a new Ad for the games 
        */
        await axios.post(`http://localhost:8080/games/${data.game}/ads`, {
            name: data.name, 
            discord: data.discord,
            weekDays: weekDays.map(Number),
            useVoiceChannel: useVoiceChannel,
            yearsPlaying: Number(data.yearsPlaying) ,
            hourStart: data.hourStart,
            hourEnd : data.hourEnd
        })

        alert('Anuncio criado com sucesso')
        
     } catch(err) {
        console.log(err)
        alert('Erro ao criar o anúncio')
     }
        
    }

   return(
    
    //===========Dialog port  start=====================
    <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
        
        {/*Dialog content start */}
        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[565px] '>
            <Dialog.Title className='text-3xl font-black '> Post an ad </Dialog.Title>
            
            {/* Form start*/}
            <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
                
                {/* Game input start*/}
                <div className='flex flex-col gap-2'>
                    
                    <label htmlFor="game" className='font-semibold'>Wich game? </label>

                    <select id='game' name='game' defaultValue='' className='bg-zinc-900 py-3 px-4 rounded text-sm '>

                    <option disabled className='text-zinc-500'>Select the game you want to play</option>
                    
                    {  
                        /*
                        *Loop through  games state and get the title of the game and bring it into the select input  
                        */
                        games.map(game=> {
                            return <option key={game.id} value={game.id}> {game.title}</option>
                        })
                    }

                    </select>
                    

                </div>
                {/*Game input end */}
                 
                 {/* Name input start*/}
                <div  className='flex flex-col gap-2'>
                    <label htmlFor="name">Your nickname</label>
                    <Input name='name' id='name' type="text" placeholder='what is your nickname in the game?' />
                </div>
                {/*Name input end*/}
                
                {/* Yearsplaing and discord input start*/}
                <div className='grid grid-cols-2 gap-6'>
                    
                    <div className='flex flex-col gap-2' >
                        <label htmlFor="yearsPlaying"> Years playing</label>

                        <Input name='yearsPlaying' id='yearsPlaying' type="number" placeholder='Is ok being 0' />
                    </div>


                    <div className='flex flex-col gap-2'>
                        <label htmlFor="discord ">Your discord</label>
                        <Input name='discord' id='discord' type="text" placeholder='user#0000' />
                    </div>

                </div>
                {/* Yearsplaing and discord input end*/}
                 
                 {/*Week days start*/}
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="weekDays">When do you usually play? </label>
                        
                         {/*Toggle group  start*/}
                        <ToggleGroup.Root 
                            type='multiple' 
                            className='grid grid-cols-4 gap-2'
                            value={weekDays}
                            onValueChange={setWeekDays} 
                        >

                            <ToggleGroup.Item 
                                value='0' 
                                className={`w-8 h-8 rounded ${weekDays.includes('0')? 'bg-violet-500' : 'bg-zinc-900'}` } 
                                title='Sunday'
                            >
                                S
                            </ToggleGroup.Item>

                            <ToggleGroup.Item 
                                value='1'  
                                className={`w-8 h-8 rounded ${weekDays.includes('1')? 'bg-violet-500' : 'bg-zinc-900'}` } 
                                title='Monday'>
                                    M
                            </ToggleGroup.Item>

                            <ToggleGroup.Item 
                                value='2' 
                                className={`w-8 h-8 rounded ${weekDays.includes('2')? 'bg-violet-500' : 'bg-zinc-900'}` } 
                                title='Tuesday'>
                                T
                            </ToggleGroup.Item>

                            <ToggleGroup.Item 
                                value='3' 
                                className={`w-8 h-8 rounded ${weekDays.includes('3')? 'bg-violet-500' : 'bg-zinc-900'}` } 
                                title='Wednesday'>
                                    W
                            </ToggleGroup.Item>

                            <ToggleGroup.Item 
                                value='4' 
                                className={`w-8 h-8 rounded ${weekDays.includes('4')? 'bg-violet-500' : 'bg-zinc-900'}` } 
                                title='Thursday'>
                                    T
                            </ToggleGroup.Item>

                            <ToggleGroup.Item 
                                value='5' 
                                className={`w-8 h-8 rounded ${weekDays.includes('5')? 'bg-violet-500' : 'bg-zinc-900'}` } 
                                title='Fiday'>
                                    F
                            </ToggleGroup.Item>

                            <ToggleGroup.Item 
                                value='6' 
                                className={`w-8 h-8 rounded ${weekDays.includes('6')? 'bg-violet-500' : 'bg-zinc-900'}` } 
                                title=''>
                                    S
                            </ToggleGroup.Item> 

                        </ToggleGroup.Root>
                        {/* Toggle group end */}
                    
                    </div>

                    <div className='flex flex-col gap-2 flex-1'>
                        <label htmlFor="hourStart">What time do you usually play </label>
                            
                        <div className='grid grid-cols-2 gap-2'>
                            <Input name='hourStart' id='hourStart' type="time" placeholder='from' />

                            <Input name='hourEnd' id='hourEnd' type="time" placeholder='to' />

                       
                        </div>

                    </div>
                </div>
                {/* Week days end*/}

                {/*CheckBox */}
                <label className='mt-2 flex items-center gap-2 text-sm'>
                    <Checkbox.Root 
                        className='w-6 h-6 p-1 rounded bg-zinc-900'
                        checked={useVoiceChannel}
                        onCheckedChange={ (checked)  => {
                            /* 
                            * If the checkbox is checked then the state of the voice channer its true else is false.
                            */
                            if(checked === true) {
                                setUseVoiceChannel(true);
                            } else {
                                setUseVoiceChannel(false)
                            }
                        }}
                    >
                            <Checkbox.Indicator> 
                                <Check className='w-4 h-4 text-emerald-400'/>
                            </Checkbox.Indicator>
                    </Checkbox.Root>
                    I use voice channel
                </label>  
                {/* CheckBox nd*/}
                <footer className='mt-4 flex justify-end gap-4'>
                    <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancel</Dialog.Close>
                    <button type='submit' className='bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600 flex items-center gap-4'>
                        <GameController className='w-6 h-6'/> 
                        Find duo
                    </button>
                </footer>
            </form>
            {/*Form end */}
        </Dialog.Content> 
        {/* Dialogo content end */}       
    </Dialog.Portal>
    //Dialog port end
   )
} 