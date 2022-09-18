import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog'

export const CreateAdBanner = () => {
    return(
    <section className='mt-8 self-stretch rounded-lg pt-1 bg-nlwGradient overflow-hidden w-[95%] mx-auto'>
       <div className='bg-[#2A2634] px-8 py-6 flex justify-between'>
          <div>
            <strong className='text-2xl text-white block'>
              You didn't find your  duo?
            </strong>
            <span className='text-zinc-400'>
              Post an ad to find new players!
            </span>
          </div>

          <Dialog.Trigger className='px-4 py-3 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3' >
            <MagnifyingGlassPlus size={24}/>Post ad
          </Dialog.Trigger>
        </div>
      </section>
    )
}