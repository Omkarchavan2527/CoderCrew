const navLinks = ["Home", "About", "Domains", "Events", "Team", "Contact"];
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [TogglemobileMenu,setTogglemobileMenu]=useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    setTogglemobileMenu(!TogglemobileMenu);
  };

  return (
    <nav className="bg-[#101C2C] w-full flex items-center justify-between px-8 py-4 fixed top-0 z-50">
     
 {/* {Hamburger} */}
      <div className="md:hidden text-lg">
        <button
          onClick={handleClick}
          className="flex flex-col justify-center items-center"
        >
          <span
            className={`bg-gray-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
          ></span>
          <span
            className={`bg-gray-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`bg-gray-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
          ></span>
        </button>
      </div>
     

     
      {/* Logo */}
      <div className="px-8">
        <img src="/code.png" alt="codercrew" className="h-11" />
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-6 text-lg font-semibold">
        {navLinks.map((link, index) => (
          <a href="#" key={index} className="hover:text-red-500 transition">
            {link}
          </a>
        ))}

        <button className="ml-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition">
          Join Now
        </button>


      </div>
      
      {TogglemobileMenu&&(
        <div className="absolute top-full left-0 mt-2 bg-slate-600 border">
          <ul className=" flex flex-col menu bg-base-200 rounded-box w-56">
  {navLinks.map((link,index)=>(
    <a href="" key={index}>{link}</a>
  ))

  }
</ul></div>
      )

      }
    </nav>
  );
}
