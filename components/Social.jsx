import Link from "next/link"
import {FaGithub, FaLinkedin, FaCodepen ,} from "react-icons/fa"
// const containerStyles = "flex items-center gap-4"
// const iconStyles = "text-2xl hover:text-accent transition-all"
const Social = ({containerStyles,iconStyles}) => {


    const socials = [
        {
            name:"github",
            url:"https://github.com/nursahtuncel",
            icon:<FaGithub/>
        },
        {
            name:"linkedin",
            url:"https://www.linkedin.com/in/nursahtuncel/",
            icon:<FaLinkedin/>
        },
        {
            name:"codepen",
            url:"https://codepen.io/Nur-sah-",
            icon:<FaCodepen/>
        },
    ]
  return (
    <div className={containerStyles}>
        {socials.map((social,index)=>{
            return(
                <Link href={social.url} key={index} className={iconStyles}>
                    {social.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social;