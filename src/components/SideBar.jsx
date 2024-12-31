import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";

import { ImBooks } from "react-icons/im";

import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSidebar } from "./SideBarContext";

export function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };




  return (
    <Card className={`h-[calc(100vh-2rem)] top-6 bottom-0 fixed w-full max-w-[20rem] z-10 p-4 shadow-xl shadow-blue-gray-900/5 duration-300 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="mb-2 p-4 text-blue-gray-700">
        <Typography variant="h5" color="blue-gray">
          Navbar
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <Squares2X2Icon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to='/students/analytics'>Analytics</Link> 
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        {/* Add similar Accordion for Courses, Profile, Settings, etc. */}

        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>

        <ListItem>
          <Link to='/students/library' className='flex item-center w-full'>
          <ListItemPrefix>
          <ImBooks className="h-5 w-5" />
          </ListItemPrefix>
          Library
          </Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>

        <ListItem>
          <button onClick={toggleSidebar}>Toggle Sidebar</button>
        </ListItem>
      </List>
    </Card>
  );
}
