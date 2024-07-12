import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
        >
            <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="flex items-center hover:text-blue-500 transition-colors cursor-pointer"
            >
                Home
            </ScrollLink>
        </Typography>

        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
        >
            <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="flex items-center hover:text-blue-500 transition-colors cursor-pointer"
            >
                About
            </ScrollLink>
        </Typography>



        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
        >
            <ScrollLink
                to="map"
                smooth={true}
                duration={500}
                className="flex items-center hover:text-blue-500 transition-colors cursor-pointer"
            >
                Map
            </ScrollLink>
        </Typography>


      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ScrollLink
            to="faq"
            smooth={true}
            duration={500}
            className="flex items-center hover:text-blue-500 transition-colors cursor-pointer"
        >
            FAQ
        </ScrollLink>

      </Typography>
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
           Chelsea's Stoop Sale
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => scroll.scrollToTop()}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}