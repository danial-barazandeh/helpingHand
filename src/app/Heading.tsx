export default function WhyUs() {


    return (
        <div className='flex flex-row justify-center 2xl:gap-32 xl:gap-32 lg:gap-28 md:gap-28 sm:gap-20
      px-[5vw] sm:px-[5vw] md:px-[7vw] lg:px-[8vw] xl:px-[10vw] 2xl:px-[10vw]'>



            <div className='flex flex-row justify-center relative puppy-size'>
                <div className='bg-accent bg-opacity-25 bg rounded-b-2xl rotate-[-24deg] absolute w-[250px] h-[350px]'>
                </div>
                <div className='bg-accent bg-polka-dots-pattern rounded-b-2xl  -rotate-12 w-[250px] h-[350px]'>
                    <div className='bg-puppy bg-contain bg-no-repeat bg-bottom rounded-b-2xl test rotate-12 ml-2 mt-[20px] w-[250px] h-[350px]'>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center gap-4'>

                <div className='flex flex-row items-center'>
                    <div className='h-1 w-4 bg-antiAcent mr-2'></div>
                    <ul className='text-antiAcent heading-size-first text-justify'>
                        Helping hand to our little friends
                    </ul>
                </div>

                <ul className='text-xl text-accentPlus30 heading-size-second text-justify'>
                    Helping hand to our little friends is a company that is engaged in the rescue of pets.
                </ul>

                <a href="mailto:HHTOLF_Rescue@gmail.com">
                    <div className='rounded-xl bg-accent py-2 px-4 text-white w-28 text-center'>
                        Email us
                    </div>
                </a>

            </div>


        </div>
    );
}