import { Link, useNavigate } from "react-router-dom";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };

  
  return (
    <section className="flex w-full h-15 justify-center  space-x-3 text-lg font-bold text-white bg-slate-400 py-2 items-center">
      <button
        onClick={onClickHome}
       className="px-1 hover:text-gray-700 hover:cursor-pointer"
       >
        Home
      </button>
      <Link to="/posts"><button className="px-1 hover:text-gray-700 hover:cursor-pointer">Posts</button></Link>
      <Link to="/users"><button className="px-1 hover:text-gray-700 hover:cursor-pointer">Users</button></Link>
    </section>
  );
};
