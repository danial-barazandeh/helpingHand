export default function Card({ title, content }) {
    return (
        <div className='bg-white rounded-2xl shadow-md flex flex-col justify-center
                        w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] md:w-[17vw] md:h-[17vw] lg:w-[17vw] lg:h-[17vh] xl:w-[20vh] xl:h-[20vh] 2xl:w-[22vh] 2xl:h-[22vh]'>
            <ul className="
            text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-extrabold
            text-antiAcent text-xs text-center h-1/3 flex flex-col justify-center">{title}</ul>
            <ul className="
            text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem]
            text-center h-2/3 flex flex-col justify-start px-2">{content}</ul>
        </div> 
    )
}