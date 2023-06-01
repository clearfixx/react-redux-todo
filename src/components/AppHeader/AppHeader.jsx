import { IoEllipsisVerticalSharp } from "react-icons/io5";

const AppHeader = () => {
  return (
    <>
      <div className="app-header mb-2 flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center">
          <IoEllipsisVerticalSharp /> TODO LIST
        </h1>
        {/* <div className="search">
          <input type="text" placeholder="What you want to find?"  className="focus:outline-none py-2 px-5 border-[1px] w-[250px] rounded-sm"/>
        </div> */}
      </div>
    </>
  );
};

export default AppHeader;
