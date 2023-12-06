import "./App.css";
import Home from "./container/Home/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./container/User/Dashboard/Dashboard";
import Deposit from "./container/User/Dashboard/Deposit/Deposit";
import UserBalance from "./container/User/Dashboard/Balance/Balance";
import Withdraw from "./container/User/Dashboard/Withdraw/Withdraw";
import Invest from "./container/User/Dashboard/Investment/Invest";
import Option from "./container/User/Dashboard/Investment/Option/Option";
import ViewAddress from "./container/User/Dashboard/Deposit/Address/ViewAddress";
import Signin from "./container/Auth/Signin";
import Signup from "./container/Auth/Signup";
import AdminDashboard from "./container/Admin/Admin";
import AddBalance from "./container/Admin/AddBalance";

function App() {
   // window.api = "http://localhost:5000";
   window.api = "https://fair-costume-colt.cyclic.app";
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />

            {/* Auth */}
            <Route path="/auth/signin" element={<Signin />} />
            <Route path="/auth/signup" element={<Signup />} />

            {/* User */}
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/balance" element={<UserBalance />} />
            <Route path="/user/deposit" element={<Deposit />} />
            <Route path="/user/deposit/address" element={<ViewAddress />} />
            <Route path="/user/withdrawal" element={<Withdraw />} />
            <Route path="/user/investment" element={<Invest />} />
            <Route path="/user/investment/option" element={<Option />} />

            {/* Admin */}
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/add-balance/" element={<AddBalance />} />
         </Routes>
      </div>
   );
}

export default App;
