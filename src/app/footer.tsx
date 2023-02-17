import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (<div className='bg-accent w-full flex flex-col pt-4'>
        <div className="flex flex-row justify-center gap-4 text-white text-2xl">
            <Link href="https://github.com/danial-barazandeh">
                <FaGithub className="cursor-pointer"></FaGithub>
            </Link>
            <Link href="https://www.instagram.com/danial.barazandeh/">
                <FaInstagram className="cursor-pointer"></FaInstagram>
            </Link>
            <Link href="https://www.linkedin.com/in/danial-barazandeh-10b23b152/">
                <FaLinkedin className="cursor-pointer"></FaLinkedin>
            </Link>
            <Link href="https://www.youtube.com/c/DanialBarazandeh">
                <FaYoutube className="cursor-pointer"></FaYoutube>
            </Link>
        </div>

        <div className="text-white text-xs opacity-75 text-center my-4">
            Designed by <Link href={"brzdev.ir"}> Brzdev.ir </Link>
        </div>
    
    </div>)
}