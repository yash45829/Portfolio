function Menu({ name }) {
  return (
    <div className="group">
      <li className="flex  items-center  font-bold my-2 hover:font-bold hover:text-white  ">
        {" "}
        <div className="w-[40px] h-[1px] border border-gray-400 group-hover:w-[70px] border-b-0 mx-4 "></div>{" "}
        {name}{" "}
      </li>
    </div>
  );
}
export default Menu;
