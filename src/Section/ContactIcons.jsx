import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

function ContactIcons (){

    return (
        <div className='flex gap-x-8 px-4'>
        <BsGithub className='text-2xl hover:text-white hover:scale-110' />
        <FaLinkedin className='text-2xl hover:text-white hover:scale-110' />
        <BiLogoGmail className='text-2xl hover:text-white hover:scale-110' />
      </div>
    )
}

export default ContactIcons;