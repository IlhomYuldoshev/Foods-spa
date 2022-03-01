import React from "react"
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./Pages/Homepage";
import OrdersPayment from "./components/OrdersPayment";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SettingPage from "./Pages/SettingPage";

function App() {
    return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<><Homepage/><OrdersPayment/></>}/>
          <Route path="/setting" element={<SettingPage/>}/>
        </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
