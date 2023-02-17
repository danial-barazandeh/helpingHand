export default function Card({ title, content }) {
    return (
        <div className='bg-white rounded-2xl shadow-md flex flex-col justify-center
                        w-[150px] h-[150px]'>
            <ul className="
            text-[0.8rem] sm:text-[0.9rem] md:text-[.9rem] lg:text-[.9rem] font-extrabold
            text-antiAcent text-xs text-center h-1/3 flex flex-col justify-center">{title}</ul>
            <ul className="
            text-[0.7rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[.8rem]
            text-center h-2/3 flex flex-col justify-start px-2">{content}</ul>
        </div> 
    )
}