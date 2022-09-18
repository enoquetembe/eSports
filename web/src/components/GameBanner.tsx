interface Props {
    bannerUrl: string;
    title: string;
    countAds: number;
}


export const GameBanner = (props: Props) => {
    return(
        <a href="" className='relative rounded-lg overflow-hidden'>
        <img src={props.bannerUrl}></img>

        <div className='w-full bg-gameGradient pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
           <strong className='font-bold text-white block'>{props.title}</strong>
           <span className='text-zinc-300 text-sm'> {props.countAds} ads </span>
        </div>
       </a>
    )
}