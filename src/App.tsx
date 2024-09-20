import { BrowserRouter, useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import MyAccount from "./pages/MyAccount"
import MyOrder from "./pages/MyOrder"
import MyOrders from "./pages/MyOrders"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/SignIn"
import Navbar from "./components/Navbar"
import { ShoopingCartProvider } from "./context"
import CheckoutSideMenu from "./components/CheckouSideMenu"

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:category', element: <Home/> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-order/:id', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*',  element: <NotFound /> },
  ])
  
  return routes;
}

function App() {

  return (
    <ShoopingCartProvider>
      <BrowserRouter basename="/react-project">
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoopingCartProvider>
  )
}

export default App
