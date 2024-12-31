import React from "react";
import {
  Navbar,
  Menu,
  MenuHandler,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useSidebar } from "./SideBarContext";


function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
    const closeMenu = () => setIsMenuOpen(false);
   
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="user profile"
              className="border border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
      </Menu>
    );
  }

 

 
function NavbarSimple() {
  const { toggleSidebar } = useSidebar();  
 
  

  const handleWindowResize = () => window.innerWidth >= 960 && toggleSidebar(true);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

   


 
  return (
    <Navbar className="w-full sticky top-0 z-20 h-max max-w-full rounded-none px-2 py-1 lg:px-8 lg:py-0">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center gap-4">
            <Bars3Icon  
                onClick={toggleSidebar}
                className="h-8 w-auto cursor-pointer"
            />
            <img 
            src="/bemsInst_logo.png"
            className="h-[75px]  " 
            alt="school logo" 
            />
        </div>

        <ProfileMenu />
    </div>
        
        
    </Navbar>
  );
}

export default NavbarSimple;