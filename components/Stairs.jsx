import {motion} from "framer-motion"

const stairAnimation = {
  initial: {
    top: "0%"   // aşağıdan gelsin
  },
  animate: {
    top: "100%", // yukarı çıksın

  },
  exit: {
    top: "0%", // yukarı çıksın

  },
};

const reverseIndex =(index)=>{
 const totalSteps =6;
 return totalSteps-index-1;
}
const Stairs = () => {
  return (
<>
 {[...Array(6)].map((_,index)=>(
    <motion.div
    key={index}
    variants={stairAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{duration:1,
        delay:reverseIndex(index)*0.1,
        ease:"easeInOut"
    }}
    className="h-full w-full relative bg-white "
    
    />
 ))}


</>



  )
}

export default Stairs