import Header from './components/Header'
import { lazy, Suspense, type ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from './context/authContext'



const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Service'))
const Access = lazy(() => import('./pages/Accessories'))
const Collection = lazy(() => import('./pages/Collection'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const AdminDashBoard = lazy(()=>import('./pages/AdminDashBoard'))

type RequireAuthTypes = { children: ReactNode; roles?: string[] }

const RequireAuth = ({ children, roles }: RequireAuthTypes) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (roles && !roles.some((role) => user.roles?.includes(role))) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold mb-2">Access denied</h2>
        <p>You do not have permission to view this page.</p>
      </div>
    )
  }

  return <>{children}</>
}

function AppContent() {
  const location = useLocation()

  const hideHeaderRoutes = ['/login', '/register','/admin']
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
          <Route
              path="/home"
              element={
                <RequireAuth roles={["USER"]}>
                  <Home />
                </RequireAuth>
              }
            />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/access" element={<Access />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
              path="/admin"
              element={
                <RequireAuth roles={["ADMIN"]}>
                  <AdminDashBoard />
                </RequireAuth>
              }
            />

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
