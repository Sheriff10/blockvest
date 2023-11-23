import logo from "./logo.svg";
import "./App.css";
import Home from "./container/Home/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./container/User/Dashboard/Dashboard";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />

            {/* User */}
            <Route path="/user/dashboard" element={<Dashboard />} />
         </Routes>
      </div>
   );
}

export default App;
