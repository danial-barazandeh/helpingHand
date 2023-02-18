import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Card from './card'
import WhyUs from './whyUs'
import Heading from './Heading'
import ContactInfo from './contactInfo'
import Footer from './footer'
import AboutUs from './aboutUs'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {

  return (
    <main>

      <div className='bg-bgSoft h-[7vh] relative z-10 w-full flex flex-row items-center  
                        px-[5vw] sm:px-[5vw] md:px-[7vw] lg:px-[8vw] xl:px-[10vw] 2xl:px-[10vw]
                        gap-4 shadow-sm'>


        <div className='flex flex-row w-[30vw] items-center gap-4'>
          <div className=' bg-[url("/images/logo.jpg")] w-[4vh] h-[5vh] bg-contain bg-no-repeat'>
          </div>
          <ul className='text-sm'>
            Helping Hand
          </ul>
        </div>




        <div className='flex flex-row justify-end gap-8 w-[70vw] items-center'>

          <a href="#aboutUs">
            <div className='text-sm'>
              About Us
            </div>
          </a>

          <a href="#whyUs">
            <div className='text-sm'>
              Why Us
            </div>
          </a>

          <a href="#contactInfo">
            <div className='text-sm'>
              Contact Info
            </div>
          </a>


        </div>



      </div>



      <Heading></Heading>




      <div id='whyUs'>
        <WhyUs></WhyUs>
      </div>

      <div className='h-[150px]'></div>

      <div id='contactInfo'>
        <div id='address'>
          <ContactInfo></ContactInfo>
        </div>
      </div>



      {/* <div className='bg-red-500 min-w-max h-44 mx-[5vw] sm:mx-[5vw] md:mx-[7vw] lg:mx-[8vw] xl:mx-[10vw] 2xl:mx-[10vw] mt-48'>

      </div> */}

      <div id='aboutUs'>
        <AboutUs></AboutUs>
      </div>

      <div className='h-[150px]'></div>
      <Footer></Footer>

    </main>
  )
}
