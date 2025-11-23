import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Customers =  lazy(() => import('../adminPages/CustomerAdmin'))
const FishesAdmin = lazy(() => import('../adminPages/FishesAdmin'))
const Orders = lazy(() => import('../adminPages/OrdersAdmin'))
const Accessories = lazy(() => import('../adminPages/AccessoriesAdmin'))


function adminRoutes() {
  return (
    
    <BrowserRouter>
        <Suspense>
            <Routes>
                <Route path="/customerAdmin" element={<Customers />}/>

            </Routes>
        </Suspense>
    </BrowserRouter>
        
    )
}

export default adminRoutes