
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Student from './Pages/Student';
import StudentAnalytics from './Pages/studentspage/Analytics';
import { SidebarProvider } from './components/SideBarContext';
import Admin from './Pages/Admin';
import StudentTabs from './Pages/adminpages/components/StudentTabs';
import StudentTable from './Pages/adminpages/components/StudentTable';
import TeachersTable from './Pages/adminpages/components/TeacherTable';
import AdminDashboard from './Pages/adminpages/AdminDashboard';
import CalendarDisplay from './Pages/adminpages/components/Calendar';
import StudentCalendar from './Pages/studentspage/Calender';
import Register from './Pages/Register';
import EbookCard from './components/EbooKLibrary';

import './App.css'

const router = createBrowserRouter([
  {
    path: '/students',
    element: <Student />,
    children: [
      {
        path: 'analytics',
        element: <StudentAnalytics />,
      },
      {
        path: 'events',
        element: <StudentCalendar />,
      },
      {
        path: 'library',
        element: <EbookCard />,
      },
    ],
  },
  {
    path: '/teachers',
    element: <div>Teachers</div>,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'students',
        element: <StudentTabs />,
      },
      {
        path: 'teachers',
        element: <TeachersTable />,
      },
      {
        path: 'events',
        element: <CalendarDisplay />,
      },
      {
        path: 'library',
        element: <EbookCard />,
      },
      {
        path: 'profile',
        element: <div>Profile</div>,
      }
    ],
  },
  {
      path: '/login',
      element: <div>Login</div>,
  },
  {
    path: '/register',
    element: <Register />,
  },
])


function App() {

  return (
    <>
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
    </>
  )
}

export default App;
