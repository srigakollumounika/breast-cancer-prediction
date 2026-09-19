import { Bell, Search, UserCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const pageNames = {
    "/": "Dashboard",
    "/prediction": "Cancer Prediction",
    "/models": "AI Models",
    "/analytics": "Analytics",
    "/history": "Prediction History",
  };

  const currentPage = pageNames[location.pathname] || "BreastAI";

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div>
          <p className="navbar-breadcrumb">BreastAI / {currentPage}</p>
          <h1>{currentPage}</h1>
        </div>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <button className="navbar-icon-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="user-profile">
          <UserCircle size={38} />

          <div className="user-info">
            <strong>Mounika</strong>
            <span>AI Researcher</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;