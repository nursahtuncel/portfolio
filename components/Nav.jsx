"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links =[
  {name:"home" ,path:"/"},
  {name:"services" ,path:"/services"},
  {name:"resume" ,path:"/resume"},
  {name:"work" ,path:"/work"},
  {name:"contact" ,path:"/contact"},
]


const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-x-8">
        {links.map((link,index)=>{
          const isActive = pathname === link.path
          return(
            <Link href={link.path} key={index} className={`${link.path === pathname 
           && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent hover:border-accent transition-all`}>
              {link.name}
            </Link>
          ) 
        })}
    </nav>
  )
}

export default Nav