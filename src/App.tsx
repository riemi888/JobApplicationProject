import { BrowserRouter,Routes,Route } from "react-router";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login";
import Application from "./pages/Application";
import Board from "./pages/Board";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="application" element={<Application />} />
          <Route path="board" element={<Board />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
