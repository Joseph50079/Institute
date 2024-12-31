
import NavbarSimple from '../components/Header';
import { MultiLevelSidebar } from '../components/SideBar';
import { Outlet } from 'react-router-dom';
import { useSidebar } from '../components/SideBarContext';
import PlaceHeader from './studentspage/PlaceHeader';

function Student() {
    const { isSidebarOpen } = useSidebar();
    console.log(isSidebarOpen);
  return (
    <div>
        <NavbarSimple />
        <div className="h-auto bg-blue-gray-50 flex gap-4 overflow-hidden">
            <MultiLevelSidebar />
            <div className={`flex-1 p-6 transition-all duration-300 ${
                isSidebarOpen ? "sm:ml-80" : "sm:ml-0"}`}
            >
                <PlaceHeader />
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Student;