"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Stairs from "./Stairs.jsx"
const StairTransition = () => {
    const pathname = usePathname();
  return (
    <>
    <AnimatePresence mode="wait">
      <div key={pathname}>

    <div  className="h-screen w-screen fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-40 flex" >
     <Stairs/>
    </div>
    <motion.div
    inital={{opacity:1}}
    transition={{
      delay:1,
      duration:0.4,
      ease:"easeInOut"

    }}
    className="h-screen w-screen fixed right-0 bottom-0 pointer-events-none"
    >
    
    </motion.div>
      </div>
    </AnimatePresence>
    </>
  )
}

export default StairTransition