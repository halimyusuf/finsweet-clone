import React from "react";
import Image from "next/image";
import { navItems } from "../../data/nav";

function Navbar() {
  return (
    <div>
      <div className="bg-tintblue h-[92px]">
        <div className="h-full flex justify-between items-center container mx-auto">
          <div>
            <Image src="/nav/logo.svg" alt="logo" height="28" width="122" />
          </div>
          <div>
            <div className="flex items-center">
              <>
                {navItems.map((nav) => (
                  <div
                    className="pr-5 text-[#bbbbcb] cursor-pointer hover:text-white"
                    key={nav.label}
                  >
                    <div>{nav.label}</div>
                  </div>
                ))}
              </>
              <div className="btn-outlined">Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
