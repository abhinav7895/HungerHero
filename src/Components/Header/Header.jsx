import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [toggleNav, setToggleNav] = useState(false);
  const { pathname } = useLocation();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(pathname);

  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };

  const handleNavItemClick = () => {
    setToggleNav(false);
  };

  useEffect(() => {
    const setFalseOnResize = () => {
      if (window.innerWidth > 766) {
        setToggleNav(false);
      }
    };
    window.addEventListener("resize", setFalseOnResize);
    return () => {
      window.removeEventListener("resize", setFalseOnResize);
    };
  }, []);

  return (
    <div
      className={`flex max-w-[1280px] mx-10 px-3 justify-between items-center gap-5  bg-white p-2 rounded-lg fixed top-0 left-0 right-0 z-50 bg-opacity-70 backdrop-blur-md border-b-2 border-x-2 h-[80px] `}
    >
      <Link to="/" className="">
        <img className="w-[75px]" src={logo} alt="logo" />
      </Link>
      <div
        className={`${
          toggleNav
            ? "block absolute right-4 w-full max-w-[200px] top-[90px] bg-blue-100 p-5 rounded-lg border border-blue-500"
            : "hidden"
        } md:flex md:items-center md:w-auto `}
      >
        <ul className={`flex gap-6 flex-wrap ${toggleNav ? 'flex-col text-center' : ''}`}>
          {['/', '/about', '/contact', '/faqs', '/cart'].map((path) => (
            <li
              key={path}
              className={`text-2xl text-white px-2 py-1 rounded ${
                pathname === path
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-[#d74112] hover:bg-red-600'
              }`}
            >
              <Link to={path} onClick={handleNavItemClick} className="flex justify-center items-center gap-3">
                {path === '/cart' ? (
                  <>
                    <FaShoppingCart />
                    {cartItems.length}
                  </>
                ) : (
                  path === "/" ? "Home" : path.substring(1).toUpperCase()
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="cursor-pointer md:hidden">
        {!toggleNav ? (
          <RxHamburgerMenu size="2.2rem" onClick={handleToggle} />
        ) : (
          <RxCross1 size="2.2rem" onClick={handleToggle} />
        )}
      </div>
    </div>
  );
}

export default Header;
