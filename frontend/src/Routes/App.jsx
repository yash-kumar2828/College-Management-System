import './App.css'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'
import InTop from '../components/ExtraComponent/InTop'
import ScrollToTp from '../components/ExtraComponent/ScrollToTop';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <InTop />
      <ScrollToTp />
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  )
}

export default App
