import Home from "./pages/Home"
import MyAccount from "./pages/MyAccount"
import MyOrder from "./pages/MyOrder"
import MyOrders from "./pages/MyOrders"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/SignIn"

function App() {

  return (
    <div>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <SignIn />
      <NotFound />
    </div>
  )
}

export default App
