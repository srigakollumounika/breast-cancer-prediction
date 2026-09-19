import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Models from "./pages/Models";
import Prediction from "./pages/Prediction";


function App() {
  return (
    <BrowserRouter>

      <div className="app-layout">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="main-section">

          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="content-area">

            <Routes>

              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/prediction"
                element={<Prediction />}
              />

              <Route
                path="/models"
                element={<Models />}
              />

              <Route
                path="/analytics"
                element={<Analytics />}
              />

              <Route
                path="/history"
                element={<History />}
              />

            </Routes>

          </main>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;