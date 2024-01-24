import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"
import HomePage from "../pages/HomePage"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router