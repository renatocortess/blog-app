import Link from "next/link"
import ThemeButton from './ThemeButton'
import imageLogo from "../../public/imgs/rgb-1.png"
import Image from 'next/image'
import Header from "./Header"

export default function Navbar() {
    return (
        <div className="mt-7 max-w-4xl mx-auto px-9  sm:px-9 lg:px-9">
          
          
            <div className="flex justify-between h-18"> 
            
                <div className="flex justify-between items-center w-full">
                <Link href="/">
      <div className="hover:cursor-pointer  flex justify-center items-center">
            <Image
              src={imageLogo}
              alt="clickable image"
              width={100}
              height={50}
            />
      </div>
        </Link>
      
                    <ThemeButton/>
                   
                </div>

            </div>

        </div>
    )
}