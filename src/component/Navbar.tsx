import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header
      className="
        h-18
        bg-white
        border-b border-slate-200
        px-6
        flex items-center justify-between
      "
    >
      <div
        className="
          flex items-center
          gap-3
          bg-slate-100
          px-4 py-2
          rounded-xl
          w-[320px]
        "
      >
        <Search size={18} className="text-slate-400" />

        <input
          placeholder="Search..."
          className="
            bg-transparent
            outline-none
            text-sm
            w-full
          "
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          className="
            w-10 h-10
            rounded-xl
            bg-slate-100
            flex items-center justify-center
            hover:bg-slate-200
            transition
          "
        >
          <Bell size={18} />
        </button>

        <div
          className="
            w-10 h-10
            rounded-full
            bg-blue-600
            text-white
            flex items-center justify-center
            font-semibold
          "
        >
          R
        </div>
      </div>
    </header>
  );
}

export default Navbar;