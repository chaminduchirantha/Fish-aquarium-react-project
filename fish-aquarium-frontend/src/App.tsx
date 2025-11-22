import Header from './components/Header'
import { lazy, Suspense, useState, type ReactNode } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/authContext'
import Footer from './components/Footer'
import AlertPopups from './components/AlertsPopups'


const Welcome =  lazy(() => import('./pages/WelcomPage'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Service'))
const Access = lazy(() => import('./pages/Accessories'))
const Collection = lazy(() => import('./pages/Collection'))
const CustomizedAqua = lazy(() => import('./pages/CustomizeAquarium'))
const Fishes = lazy(() => import('./pages/Fishes'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const AdminDashBoard = lazy(()=>import('./pages/AdminDashBoard'))

type RequireAuthTypes = { children: ReactNode; roles?: string[] };

const RequireAuth = ({ children, roles }: RequireAuthTypes) => {
  const { user, loading } = useAuth();
  const [showPopup, setShowPopup] = useState(false);


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {

  if (!showPopup) setShowPopup(true);
    return (
      <>
        {showPopup && <AlertPopups onClose={() => setShowPopup(false)} />}
      </>
    );
  }


  if (roles && !roles.some((r) => user.roles?.includes(r))) {
    return (
      <div className="text-center py-20">
        <h1 className="text-xl font-bold">Access Denied</h1>
        <p>You don't have permission to view this page.</p>
      </div>
    );
  }

  return <>{children}</>;
};

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
          {/* <Route
              path="/home"
              element={
                <RequireAuth roles={["USER"]}>
                  <Home />
                </RequireAuth>
              }
            /> */}
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
           <Route
              path="/fish"
              element={
                <RequireAuth roles={["USER"]}>
                  <Fishes />
                </RequireAuth>
              }
            />
          <Route path="/access" element={<Access />} />
          <Route path="/collection" element={<Collection />} />
           <Route
              path="/customized"
              element={
                <RequireAuth roles={["USER"]}>
                  <CustomizedAqua />
                </RequireAuth>
              }
            />
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

      <Footer/>

    </>
    
  )
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
