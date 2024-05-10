import Navbar from './../components/DashboardAdmin/Navbar/Navbar.jsx'
import Sidebar from '../components/DashboardAdmin/Sidebar/Sidebar.jsx'

export default function Layout({ children }) {
  return (
        <div className='flex text-white'>
          
          <aside className='flex-none w-72 bg-[#262525] p-[20px]'>
            <Sidebar />
          </aside>

          <div className='flex-1 p-[20px]'>
            <Navbar />
            {children}
          </div>

        </div>
  )
}