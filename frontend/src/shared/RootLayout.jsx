import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function RootLayout() {
  return (
    <div className="min-h-dvh flex flex-col bg-navy text-textPrimary">
      <Navbar />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


