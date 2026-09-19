import {
    Activity,
    BarChart3,
    BrainCircuit,
    HeartPulse,
    History,
    LayoutDashboard,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Prediction",
      path: "/prediction",
      icon: <Activity size={20} />,
    },
    {
      name: "Models",
      path: "/models",
      icon: <BrainCircuit size={20} />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "History",
      path: "/history",
      icon: <History size={20} />,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <HeartPulse size={28} />
        </div>

        <div>
          <h2>BreastAI</h2>
          <span>Healthcare Intelligence</span>
        </div>
      </div>

      <div className="sidebar-menu">
        <p className="menu-label">MAIN MENU</p>

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className="menu-icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="status-dot"></div>

        <div>
          <p>System Status</p>
          <span>AI Services Online</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;