
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { Badge, Avatar, Button } from "@material-tailwind/react";
import { useSidebar } from "./SideBarContext";




function AdminHeader() {
    const { toggleSidebar } = useSidebar();
  return (
    <div className='flex top-0 p-4 sticky  z-10 justify-between rounded-b-lg backdrop-blur-lg mb-7 '>
        <Button 
        variant="text" 
        ripple="light"
        onClick={toggleSidebar} 
        className="bg-transparent text-gray-900 ">
            <Bars3BottomLeftIcon class="h-8 w-8 font-bold text-xl" />
        </Button>
        <Badge overlap="circular" color='light-green' placement="bottom-end">
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
        </Badge>
    </div>
  );
}

export default AdminHeader;