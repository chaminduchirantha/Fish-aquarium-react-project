import Header from './components/Header'
import { lazy, Suspense, useState, type ReactNode } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/authContext'
import Footer from './components/Footer'
import AlertPopups from './components/AlertsPopups'
import { CartProvider } from './context/cartContext'


const Welcome =  lazy(() => import('./pages/WelcomPage'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Service'))
const Access = lazy(() => import('./pages/Accessories'))
const Collection = lazy(() => import('./pages/Collection'))
const Feedback = lazy(() => import('./pages/FeedbackPage'))
const CustomizedAqua = lazy(() => import('./pages/CustomizeAquarium'))
const Fishes = lazy(() => import('./pages/Fishes'))
const Dilivery = lazy(() => import('./pages/DiliveryPage'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const CheckoutPage = lazy(() => import('./pages/OrderFishPage'))
const AdminDashBoard = lazy(()=>import('./pages/AdminDashBoard'))
const CustomerAdmin = lazy(() => import('./adminPages/CustomerAdmin'))
const FishesAdmin = lazy(() => import('./adminPages/FishesAdmin'))
const OrdersAdmin = lazy(() => import('./adminPages/OrdersAdmin'))
const AccessoriesAdmin = lazy(() => import('./adminPages/AccessoriesAdmin'))
const FeedbackAdmin = lazy(() => import('./adminPages/FeedbackAdmin'))
const PaymentAdmin = lazy(() => import('./adminPages/PaymentAdmin'))
const DeliveryAdmin = lazy(() => import('./adminPages/DiliveryAdmin'))
const CustomizedAquariumAdmin = lazy(() => import('./adminPages/CustomizedAquariumAdmin'))

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

  const hideHeaderRoutes = ['/login', '/register', '/admin']
  const shouldHideHeader = hideHeaderRoutes.some(route => location.pathname.startsWith(route))

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
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/feedbacak"element={<Feedback />} />
          
          <Route path="/fish"element={<Fishes />}/>
          <Route
              path="/access"
              element={
                <RequireAuth roles={["USER"]}>
                  <Access />
                </RequireAuth>
              } 
          /> 

          <Route
              path="/ordersFish"
              element={
                <RequireAuth roles={["USER"]}>
                  <CheckoutPage />
                </RequireAuth>
              } 
          /> 

          <Route path="/collection" element={<Collection />} />
          <Route
            path="/customized"
            element={
              <RequireAuth roles={["USER"]}>
                <CustomizedAqua />
              </RequireAuth>
            }
          />

          <Route
            path="/dilivery"
            element={
              <RequireAuth roles={["USER"]}>
                <Dilivery />
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
            >
              <Route path="customers" element={<CustomerAdmin />} />
              <Route path="fishes" element={<FishesAdmin />} />
              <Route path="orders" element={<OrdersAdmin />} />
              <Route path="accessories" element={<AccessoriesAdmin />} />
              <Route path="feedback" element={<FeedbackAdmin/>} />
              <Route path="delivery" element={<DeliveryAdmin/>} />
              <Route path="payments" element={<PaymentAdmin/>} />
              <Route path="customized" element={<CustomizedAquariumAdmin/>} />
            </Route>
        </Routes>
      </Suspense>

      <Footer/>

    </>
    
  )
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
