import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"
import {LogIn, House, Rocket, Store, Star} from 'lucide-react';
import { ModeToggle } from "./ui/toggle";
import MobileMenu from "./MobileMenu";




export default function Navbar() {
    return (
        <div className = 'h-24 flex items-center justify-between'>
            {/* LEFT */}
            <div className=' md:hidden lg:block w-[30%] ml-3'>
                <Link href = "/" className="font-bold text-sm text-blue-600 text-muted">Aria Land & Property Consultants</Link>
            </div>
             {/* CENTER */}
            <div className='hidden md:flex w-[50%] text-sm'>
                {/* LINKS */}
                <div className='flex gap-6 text-gray-600'>
                    <Link href ='/' className="flex gap-2 items-center">
                    <House />
                    <span>Homepage</span>
                    </Link>

                    <Link href ='/' className="flex gap-2 items-center">
                    <Store />
                    <span>About</span>
                    </Link>
                    
                </div>
            </div>
              {/* RIGHT */}
            <div className=' w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
        
        {/*
        <div className = "cursor-pointer">
            <img src="/people.png" alt="" width={20} height={20}/>
        </div>
        */}
        
         {/*
        <div className = "cursor-pointer">
            <img src="/messages.png" alt="" width={20} height={20}/>
        </div>         
         */}
        


         {/*
         <div className = "cursor-pointer">
            <img src="/notifications.png" alt="" width={20} height={20}/>
        </div>
         */}

                <MobileMenu/>
            </div>
        </div>
    );  
  }
  