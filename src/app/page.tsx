import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Card from './card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='flex flex-col'>

        <div className='bg-bgSoft h-[7vh] relative z-10 w-[100vw] flex flex-row items-center 
                        px-[5vw] sm:px-[5vw] md:px-[7vw] lg:px-[8vw] xl:px-[10vw] 2xl:px-[10vw]
                        gap-4'>

          <div className=' bg-[url("/images/logo.jpg")] w-[4vh] h-[5vh] bg-contain bg-no-repeat'>
          </div>
          <ul className='text-sm'>
            Helping Hand
          </ul>

        </div>

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

            <div className='rounded-xl bg-accent py-2 px-4 text-white w-28 text-center'>
              Email us
            </div>
          </div>


        </div>


        <div className='px-[5vw] sm:px-[5vw] md:px-[7vw] lg:px-[8vw] xl:px-[10vw] 2xl:px-[10vw]
        mt-0 sm:mt-0 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20'>
          <div className='bg-accent rounded-2xl w-full h-[20vh]'>

            <div className='flex flex-col'>

              <div className='px-8'>
                <div className='text-white border-b-4 border-antiAcent py-4 w-[15vw]'>
                  Why us ?
                </div>
              </div>

              <div className='pt-12 flex flex-row justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12'>

                <Card title="Rescue" content="We provide free shelter and treatment to pets."></Card>
                <Card title="Pet" content="We help animals find loving owners."></Card>
                <Card title="Family" content="We help you to find yourself a smaller furry friend."></Card>

              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
