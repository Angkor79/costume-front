import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import HomePage from '../layout/HomePage';
import AdminHome from '../layout/AdminHome'
import Cart from '../layout/Cart'
import Profile from '../layout/Profile'
import Footer from '../layout/Footer'
import Landing from '../layout/Landing'
import ProductPage from '../layout/ProductPage'
import ProductDetails from '../layout/ProductDetails'
import CheckOut from '../layout/CheckOut'
import PurchaseSuccess from '../layout/PurchaseSuccess'








const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />}
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
      <Footer />
    </>,
    children : [
      { index: true, element: <HomePage /> },
      { path: '/cart', element: <Cart />},
      { path: '/profile', element: <Profile />},
      { path: '/landing', element: <Landing />},
      { path: '/products', element: <ProductPage />},
      { path: '/product-details', element: <ProductDetails />},
      { path: '/check-out', element: <CheckOut />},
      { path: '/purchase-success', element: <PurchaseSuccess/>},
  
   
    
    ]
  }
])


const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <AdminHome /> },
      { path: '/profile', element: <Profile />},
     
    
    ]
  }
])


export default function AppRouter() {
  const { user } = useAuth();
  const finalRouter = user?.role === 'admin' ? adminRouter : user ? userRouter : guestRouter;
  return <RouterProvider router={finalRouter} />;
}
