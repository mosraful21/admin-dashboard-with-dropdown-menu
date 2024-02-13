import {
  BsPersonCircle,
  BsJustify,
  BsCart3,
  BsHouse,
  BsBell,
} from "react-icons/bs";

const Header = ({ OpenSidebar }) => {
  return (
    <section className="header">
      <div className="">
        <div className="hidden lg:block py-2">
          <span className="flex items-center justify-center gap-1 text-xl font-extrabold text-blue-700">
            <BsCart3 className="text-2xl" /> SHOP
          </span>
        </div>
        <div>
          <BsJustify
            onClick={OpenSidebar}
            className="text-3xl mt-1 ml-2 lg:hidden"
          />
        </div>
      </div>

      <div className="lg:hidden">
        <span className="flex items-center justify-center gap-1 text-xl font-extrabold text-blue-700">
          <BsCart3 className="text-2xl" /> SHOP
        </span>
      </div>

      <div className="flex items-center justify-between px-3">
        <a
          href="/"
          className="lg:flex items-center justify-center gap-1 font-semibold text-purple-600 underline hidden"
        >
          <BsHouse /> Home
        </a>
        <div className="flex items-center gap-2">
          <a href="/">
            <BsPersonCircle className="text-2xl" />
          </a>
          <a href="/">
            <BsBell className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
