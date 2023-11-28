
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

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />

            {/* User */}
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/balance" element={<UserBalance />} />
            <Route path="/user/deposit" element={<Deposit />} />
            <Route path="/user/deposit/address" element={<ViewAddress />} />
            <Route path="/user/withdrawal" element={<Withdraw />} />
            <Route path="/user/investment" element={<Invest />} />
            <Route path="/user/investment/option" element={<Option />} />
         </Routes>
      </div>
   );
}

export default App;
