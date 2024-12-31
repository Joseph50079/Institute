
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { Outlet } from 'react-router-dom';
import { useSidebar } from '../components/SideBarContext';

function Admin() {
    const {isSidebarOpen} = useSidebar()

  return (
    <div className=' p-2 sm:p-4 flex gap-4 h-full  bg-seashell overflow-hidden sm:overflow-clip'>
        <AdminSidebar className='items-center' />
        <div className={`flex flex-col min-h-screen overflow-hidden lg:overflow-visible sm:overflow-clip flex-1 p-6 duration-500 transition-all ${ !isSidebarOpen ? 'm-auto' : 'sm:ml-[350px]' } `}>
            <AdminHeader className='' />
            <div className=''><Outlet /></div>
            
        </div>
    </div>
  )
}

export default Admin;