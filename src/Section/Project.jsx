import SkillIcon from "../Components/SkillIcon";
import {FiExternalLink} from 'react-icons/fi'
function Project (){
 
    return(
   <div id='projects'>
    <h1>Projects</h1>
    <div className="rounded-md hover:cursor-default mr-16 my-2 hover:bg-[#151d30] py-4 px-4 hover:drop-shadow-lg transition-all">
        <img src="" alt="" />
         <div>
            <h1 className="font-semibold text-xl my-2 px-1">Learning management system</h1>
            <p>This is learning manegement system</p>
            <div>
             <a href="" className="flex w-fit justify-start hover:cursor-pointer items-center">Live demo <span><FiExternalLink/></span></a>
             <a href="">github</a>
             <div className='flex flex-wrap gap-2   mb-4'>
          <SkillIcon skill={"Html"} />
          <SkillIcon skill={"Css"} />
          <SkillIcon skill={"Tailwind"} />
          <SkillIcon skill={"Javascript"} />
          <SkillIcon skill={"React"} />
          <SkillIcon skill={"Redux"} />
          <SkillIcon skill={"Redux-toolkit"} />
          <SkillIcon skill={"Payment-gateway-integration"} />
          <SkillIcon skill={"Chartjs"} />
        </div>
            </div>
            
         </div>
    </div>

   </div>
    )

}

export default Project;