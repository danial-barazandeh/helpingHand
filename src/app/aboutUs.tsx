import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function AboutUs() {
    return (
        <div className='relative'>


            <div className='px-[5vw] sm:px-[5vw] md:px-[7vw] lg:px-[8vw] xl:px-[10vw] 2xl:px-[10vw]
                            absolute left-0 right-0 top-0 '>

                <div className='bg-accent bg-opacity-25 rounded-2xl w-full h-[40vh] rotate-2'>
                    .
                </div>
            </div>

            <div className='px-[5vw] sm:px-[5vw] md:px-[7vw] lg:px-[8vw] xl:px-[10vw] 2xl:px-[10vw]
                            mt-0 sm:mt-0 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 relative '>

                <div className='bg-accent rounded-2xl flex w-full h-[40vh] relative   overflow-clip'>

                    <div className='px-8 flex flex-row-reverse h-min w-[100%] absolute'>
                        <div className='text-white border-b-4 border-antiAcent py-4 w-[100px] text-right'>
                            About Us
                        </div>
                    </div>

                    <div className='hidden sm:hidden md:hidden lg:flex flex-row justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 absolute'>
                        <div className='bg-blob w-80 h-80 bg-contain bg-no-repeat'>
                        </div>
                    </div>

                    <div className='flex flex-row justify-end w-[100%] gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 absolute'>
                        <div className='text-justify w-full h-[40vh] text-xs text-white flex flex-col justify-center items-start'>
                            <p className='text-justify ml-16 items-center justify-center flex flex-row text-xs sm:text-xs md:text-lg'>
                                Helping hand to our little friends is a company that is engaged in the rescue of pets. We provide free shelter and treatment to pets who have been abused or found themselves on the street.  We also help animals find loving owners. If you know animals that need help, or if you understand that you can no longer keep your animal, but you don't want to throw it out on the street, or if, on the contrary, you would like to find yourself a smaller furry friend, then in all these cases, come to us.
                            </p>
                        </div>
                        <div className='bg-blob w-80 h-80 bg-contain bg-no-repeat'>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}