import Header from './components/Header'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'



const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Service'))
const Access = lazy(() => import('./pages/Accessories'))
const Collection = lazy(() => import('./pages/Collection'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
function AppContent() {
  const location = useLocation()

  const hideHeaderRoutes = ['/login', '/register']
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname)

  return (
    <>
    
      {!shouldHideHeader && <Header />}
    
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="w-12 h-12 border-4 border-sky-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/access" element={<Access />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        
      </Suspense>

    </>
    
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
export default App
