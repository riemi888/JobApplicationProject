import { HashRouter,Routes,Route } from "react-router";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login";
import Application from "./pages/Application";
import Board from "./pages/Board";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="application" element={<Application />} />
          <Route path="board" element={<Board />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
