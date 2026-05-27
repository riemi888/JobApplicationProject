import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Briefcase,
  KanbanSquare,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Application",
    path: "/application",
    icon: Briefcase,
  },
  {
    label: "Board",
    path: "/board",
    icon: KanbanSquare,
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">JobTracker</h1>

        <p className="text-slate-400 text-sm mt-1">
          Manage your career journey
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3
                px-4 py-3
                rounded-xl
                transition-all
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
              `}
            >
              <Icon size={20} />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-800">
        <div className="text-sm text-slate-400">
          Built with React + Tailwind
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;