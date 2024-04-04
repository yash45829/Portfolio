import SkillIcon from "../Components/SkillIcon";

function Skills (){

    return (
        <div id='skills' className=' rounded-md  mr-16 my-28 hover:bg-[#151d30] py-4 px-4 hover:drop-shadow-lg transition-all'>

        {/* frontend side */}
        <h1 className=''>Frontend</h1>
        <div className='flex flex-wrap gap-4 border-l pl-4 mb-4'>
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
        {/* backend side  */}
        <h1 className=''>Backend</h1>
        <div className='flex flex-wrap gap-4 border-l pl-4 mb-4'>
          <SkillIcon skill={"NodeJS"} />
          <SkillIcon skill={"MongoDb"} />
          <SkillIcon skill={"ExpressJs"} />
          <SkillIcon skill={"Rest apis"} />
        </div>
        {/* tools  */}
        <h1 className=''>Tools</h1>
        <div className='flex flex-wrap gap-4 border-l pl-4 mb-4'>
          <SkillIcon skill={"Vs Code"} />
          <SkillIcon skill={"MongoDb"} />
          <SkillIcon skill={"ExpressJs"} />
          <SkillIcon skill={"Rest apis"} />
        </div>
      </div>
    )
}

export default Skills;