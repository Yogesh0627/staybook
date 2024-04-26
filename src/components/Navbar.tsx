'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {

  const allLinks = [
    { to: "/", title: "Home" },
    { to: "/hotels", title: "Hotels" },
    { to: "/register", title: "New Registration" },
    { to: "https://staybook.in/login", title: "Login / Signup" }
  ];
 


  const NavLinks = allLinks.map((link) => (
    <Link onClick={()=>closeMenu()} className={`{}`} key={link.title} href={link.to}>
      {link.title}
    </Link>
  ));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // <div className="px-10 w-full py-3 bg-[#005250]">
    //   <div className="flex justify-between items-center">
    //     <div className="">
    //       <Link href={'/'}>
    //       <Image
    //         src={`/brand_logo.svg`}
    //         width={1000}
    //         height={1000}
    //         className="w-12 h-12"
    //         alt="staybook logo"
          
    //       />
    //       </Link>
    //     </div>
    //     <div className="flex gap-10 text-white text-lg">{NavLinks}</div>
    //   </div>
    // </div>

  //   <div className="px-10 w-full py-3 bg-[#005250]">
  //   <div className="flex justify-between items-center">
  //     <div>
  //       <Link href="/">
  //         <Image
  //           src="/brand_logo.svg"
  //           width={40}
  //           height={40}
  //           className="w-12 h-12"
  //           alt="staybook logo"
  //         />
  //       </Link>
  //     </div>
  //     <div className="sm:hidden">
  //       <button
  //         onClick={toggleMenu}
  //         className="text-white text-xl focus:outline-none"
  //         aria-label="Toggle Menu"
  //       >
  //         ☰
  //       </button>
  //     </div>
  //     <div className={`fixed top-0 right-0 bg-[#005250] p-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-60' : 'w-0'} sm:w-auto sm:flex sm:flex-col sm:static sm:w-full`}>
  //       {isMenuOpen && (
  //         <div className="flex flex-col gap-4">
  //           <button
  //             onClick={closeMenu}
  //             className="text-white text-xl focus:outline-none self-end"
  //           >
  //             ✕
  //           </button>
  //           {NavLinks}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // </div>
  
//   <div className="px-10 w-full py-3 bg-[#005250]">
//   <div className="flex justify-between items-center">
//     <div>
//       <Link href="/">
//         <Image
//           src="/brand_logo.svg"
//           width={40}
//           height={40}
//           className="w-12 h-12"
//           alt="staybook logo"
//         />
//       </Link>
//     </div>
//     <div className="hidden border-2 border-red-500 md:flex gap-10 text-white text-lg">{NavLinks}</div>
//     <div className="sm:hidden w-fit">
//       <button
//         onClick={toggleMenu}
//         className="text-white text-xl focus:outline-none"
//         aria-label="Toggle Menu"
//       >
//         ☰
//       </button>
//     </div>
//     <div className={`fixed top-0 right-0 bg-[#005250] p-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-60' : 'w-0'} sm:w-auto sm:flex sm:flex-col sm:static sm:w-full`}>
//       {isMenuOpen && (
//         <div className="flex flex-col gap-4">
//           <button
//             onClick={closeMenu}
//             className="text-white text-xl focus:outline-none self-end"
//           >
//             ✕
//           </button>
//           {NavLinks}
//         </div>
//       )}
//     </div>
//   </div>
// </div>
 <div className="px-10 w-full py-3 bg-[#005250]">
<div className="flex  justify-between items-center">
  <div>
    <Link href="/">
      <Image
        src="/brand_logo.svg"
        width={1000}
        height={1000}
        className="w-16 h-16"
        alt="staybook logo"
      />
    </Link>
  </div>
  <div className="hidden sm:flex gap-10 text-white text-xl">{NavLinks}</div>
  <div className="sm:hidden ">
    <button
      onClick={toggleMenu}
      className="text-white  text-4xl focus:outline-none"
      aria-label="Toggle Menu"
    >
      ☰
    </button>
  </div>
  <div className={`md:hidden fixed top-0 right-0  bg-[#005250] p-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-60' : 'w-0'} sm:w-auto sm:flex sm:flex-col sm:static sm:w-full`}>
    {isMenuOpen && (
      <div className="flex flex-col gap-4">
        <button
          onClick={closeMenu}
          className="text-white text-xl focus:outline-none self-end"
        >
          ✕
        </button>
        <div className="text-white flex flex-col gap-4">{NavLinks}</div>
      </div>
    )}
  </div>
</div>
</div> 

    );
};
  
export default Navbar;
