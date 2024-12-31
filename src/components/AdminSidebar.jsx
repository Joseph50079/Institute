import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Avatar,
  } from "@material-tailwind/react";
  import {
    UserCircleIcon,
    Cog6ToothIcon,
    CalendarIcon,
    PowerIcon,
    Squares2X2Icon,
    ChatBubbleLeftRightIcon,
    AcademicCapIcon,
    LockClosedIcon,
    UserIcon,
    ArrowLeftEndOnRectangleIcon,
  } from "@heroicons/react/24/solid";

  import { ImBooks } from "react-icons/im";

  import { Link } from "react-router-dom";
  import { useSidebar } from "./SideBarContext";
   
  export default function AdminSidebar() {
    const { toggleSidebar, isSidebarOpen } = useSidebar();
    return (
      <Card className={` bg-gradient-to-b from-gray-900 to-gray-600 h-[calc(100vh-2rem)] fixed z-20  w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 duration-300 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} `}>
        <div className="mb-2 p-4 flex gap-2 justify-between items-center">
          <div>
            <LockClosedIcon className="h-6 w-6 rounded-full text-green-700" />
            <Typography variant="h5" color="white">
                Admin School
            </Typography>
          </div>

          <div>
            < ArrowLeftEndOnRectangleIcon
            onClick={toggleSidebar} 
            className="h-7 w-7 text-blue-gray-300 font-extrabold rounded-md hover:bg-blue-gray-700" />
          </div>
        </div>

        <div className="flex items-center pl-3 my-4 rounded-lg bg-blue-gray-400 py-3 text-gray-100 gap-4">
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="rounded" />
            <div>
            <Typography variant="h6">Tania Andrew</Typography>
            <Typography variant="small" className="font-bold text-blue-gray-800">
                Super Admin
            </Typography>
            </div>
        </div>

        <List className="text-white">

          <ListItem>
            <Link to='/admin/dashboard' className='flex item-center w-full'>
            <ListItemPrefix>
              <Squares2X2Icon className="h-5 w-5" />
            </ListItemPrefix>
              Dashboard
            </Link>
          </ListItem>

          <ListItem>
            <Link to='/admin/students' className='flex item-center w-full'>
            <ListItemPrefix>
              <AcademicCapIcon className="h-5 w-5" />
            </ListItemPrefix>
              Studdents
            </Link>
          </ListItem>

          <ListItem>
            <Link to='/admin/teachers' className='flex item-center w-full'>
            <ListItemPrefix>
              <UserIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to='/admin/teachers' >Teachers</Link>
            </Link>
          </ListItem>

          <ListItem>
            <Link to='/admin/events' className='flex item-center w-full'>
            <ListItemPrefix>
              <CalendarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Event
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="red" className="rounded-full" />
            </ListItemSuffix>
            </Link>
          </ListItem>

          <ListItem>
            <Link to='/admin/profile' className='flex item-center w-full'>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
            </Link>
          </ListItem>

          <ListItem>
            <Link to='/admin/library' className='flex item-center w-full'>
            <ListItemPrefix>
              <ImBooks className="h-5 w-5" />
            </ListItemPrefix>
            Library
            </Link>
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
            </ListItemPrefix>
            Chat
            <ListItemSuffix>
              <Chip value="24" size="sm" variant="ghost" color="green" className="rounded-full" />
            </ListItemSuffix>
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

        </List>
      </Card>
    );
  }